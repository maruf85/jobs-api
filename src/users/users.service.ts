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
import { Company } from 'src/company/interfaces/company.interface';
import { CompanyService } from 'src/company/company.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
    @Inject(forwardRef(() => ProfilesService))
    private readonly profileService: ProfilesService,
    @Inject(forwardRef(() => CompanyService))
    private readonly companyService: CompanyService,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.userModel
        .find()
        .select('-password')
        .populate({
          path: 'profile',
          select: '-education -experiences -skills -certifications -languages',
        })
        .populate({
          path: 'company',
          select: '-companyInfo',
        });
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

  async findByEmail(userEmail: string): Promise<User | undefined> {
    try {
      return await this.userModel.findOne({ email: userEmail });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async createProfile(profile: Profile, userInterface: User): Promise<User> {
    const { email } = userInterface;
    const user = await this.userModel.findOne({ email });

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
          });
          return newUser.save();
        });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async createCompany(company: Company, userInterface: User): Promise<User> {
    const { email } = userInterface;
    const user = await this.userModel.findOne({ email });

    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    try {
      const getCompanyId = async (): Promise<string> => {
        const result = await this.companyService.create(company);
        return result.id;
      };

      const companyId = await getCompanyId();

      return await this.authService
        .hashPassword(userInterface.password)
        .then((hashedPassword) => {
          const newUser = new this.userModel({
            ...userInterface,
            password: hashedPassword,
            company: companyId,
          });
          return newUser.save();
        });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, user: User): Promise<User> {
    try {
      return await this.userModel.findByIdAndUpdate(
        id,
        { ...user },
        {
          new: true,
        },
      );
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
