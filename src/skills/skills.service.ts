import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Skill } from './interfaces/skill.interface';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel('Skill')
    private readonly skillModel: Model<Skill>,
    @InjectModel('Profile')
    private readonly profileModel: Model<Profile>,
  ) {}

  async findAll(): Promise<Skill[]> {
    try {
      return await this.skillModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<Skill> {
    try {
      return await this.skillModel.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(skill: Skill): Promise<Skill> {
    try {
      const profile = await this.profileModel.findOne({
        _id: skill.profileId,
      });
      const newSkill = new this.skillModel({
        ...skill,
      });
      const _skill = await newSkill.save();
      if (profile) {
        profile.skills.push(newSkill);
        await profile.save();
      }
      return _skill;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, skill: Skill): Promise<Skill> {
    try {
      return await this.skillModel.findByIdAndUpdate(
        id,
        { ...skill },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<Skill> {
    try {
      const skill = await this.skillModel.findByIdAndRemove(id);
      const profile = await this.profileModel.findOne({
        _id: skill.profileId,
      });

      if (profile) {
        await this.profileModel.updateOne({
          $pull: { skills: skill._id },
        });
      }
      return skill;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
