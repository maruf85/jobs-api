import { Model } from 'mongoose';
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { AuthService } from 'src/auth/auth.service';
import { ProfilesService } from 'src/profiles/profiles.service';
import { Profile } from 'src/profiles/interfaces/profile.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @Inject(forwardRef(() => ProfilesService))
    private readonly profileService: ProfilesService,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.userModel.find().select('-password').populate({
        path: 'profile',
        select: '-education -experiences -skills',
      });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findByUserName(username: string): Promise<User | undefined> {
    try {
      return await this.userModel.findOne({ username: username });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findById(userId: string): Promise<User | undefined> {
    try {
      return await this.userModel.findOne({ _id: userId });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(profile: Profile, userInterface: User): Promise<User> {
    const { username } = userInterface;
    const user = await this.userModel.findOne({ username });

    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    try {
      const getProfileId = async (): Promise<string> => {
        const result = await this.profileService.create(profile);
        return result.id;
      };

      const profileId = await getProfileId();

      return await this.authService
        .hashPassword(userInterface.password)
        .then((hashedPassword) => {
          const newUser = new this.userModel({
            ...userInterface,
            password: hashedPassword,
            profile: profileId,
            createdAt: new Date(),
          });
          return newUser.save();
        });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<User> {
    try {
      return await this.userModel.findByIdAndRemove(id);
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
