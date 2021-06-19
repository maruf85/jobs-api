import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Experience } from './interfaces/experience.interface';

@Injectable()
export class ExperiencesService {
  constructor(
    @InjectModel('Experience')
    private readonly experienceModel: Model<Experience>,
    @InjectModel('Profile')
    private readonly profileModel: Model<Profile>,
  ) {}

  async findAll(): Promise<Experience[]> {
    try {
      return await this.experienceModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<Experience> {
    try {
      return await this.experienceModel.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(experience: Experience): Promise<Experience> {
    try {
      const profile = await this.profileModel.findOne({
        _id: experience.profileId,
      });
      const newExperience = new this.experienceModel({
        ...experience,
      });
      const _experience = await newExperience.save();
      if (profile) {
        profile.experiences.push(newExperience);
        await profile.save();
      }
      return _experience;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, experience: Experience): Promise<Experience> {
    try {
      return await this.experienceModel.findByIdAndUpdate(
        id,
        { ...experience },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<Experience> {
    try {
      const experience = await this.experienceModel.findByIdAndRemove(id);
      const profile = await this.profileModel.findOne({
        _id: experience.profileId,
      });

      if (profile) {
        await this.profileModel.updateOne({
          $pull: { experiences: experience._id },
        });
      }
      return experience;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
