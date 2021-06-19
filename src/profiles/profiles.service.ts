import {
  BadRequestException,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Profile } from './interfaces/profile.interface';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel('Profile')
    private readonly profileModel: Model<Profile>,
    @Inject(forwardRef(() => CloudinaryService))
    private cloudinaryService: CloudinaryService,
  ) {}

  async findAll(): Promise<Profile[]> {
    try {
      return await this.profileModel
        .find()
        .populate('education experiences skills certifications');
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<Profile> {
    try {
      return await this.profileModel.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(profile: Profile): Promise<Profile> {
    try {
      const newProfile = new this.profileModel({
        ...profile,
      });
      return await newProfile.save();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, profile: Profile): Promise<Profile> {
    try {
      return await this.profileModel.findByIdAndUpdate(
        id,
        { ...profile },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async updateProfileImage(
    id: string,
    imageUrl: string,
    profile?: Profile,
  ): Promise<Profile> {
    try {
      return await this.profileModel.findByIdAndUpdate(
        id,
        { ...profile, profileImage: imageUrl, updatedAt: new Date() },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async uploadImageToCloudinary(file: Express.Multer.File, profileId: string) {
    try {
      return await this.cloudinaryService.uploadImage(file, profileId);
    } catch (error) {
      throw new BadRequestException(`${error.message}`, 'Invalid file type.');
    }
  }
}
