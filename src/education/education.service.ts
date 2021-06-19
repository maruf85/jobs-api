import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Education } from './interfaces/education.interface';

@Injectable()
export class EducationService {
  constructor(
    @InjectModel('Education')
    private readonly educationModel: Model<Education>,
    @InjectModel('Profile')
    private readonly profileModel: Model<Profile>,
  ) {}

  async findAll(): Promise<Education[]> {
    try {
      return await this.educationModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<Education> {
    try {
      return await this.educationModel.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(education: Education): Promise<any> {
    try {
      const profile = await this.profileModel.findOne({
        _id: education.profileId,
      });
      const newEducation = new this.educationModel({
        ...education,
      });
      const _education = await newEducation.save();
      if (profile) {
        profile.education.push(newEducation);
        await profile.save();
      }
      return _education;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, education: Education): Promise<Education> {
    try {
      return await this.educationModel.findByIdAndUpdate(
        id,
        { ...education },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<Education> {
    try {
      const education = await this.educationModel.findByIdAndRemove(id);
      const profile = await this.profileModel.findOne({
        _id: education.profileId,
      });

      if (profile) {
        await this.profileModel.updateOne({
          $pull: { education: education._id },
        });
      }
      return education;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
