import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Language } from './interfaces/language.interface';

@Injectable()
export class LanguagesService {
  constructor(
    @InjectModel('Language')
    private readonly languageModel: Model<Language>,
    @InjectModel('Profile')
    private readonly profileModel: Model<Profile>,
  ) {}

  async findAll(): Promise<Language[]> {
    try {
      return await this.languageModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<Language> {
    try {
      return await this.languageModel.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(language: Language): Promise<Language> {
    try {
      const profile = await this.profileModel.findOne({
        _id: language.profileId,
      });
      const newLanguage = new this.languageModel({
        ...language,
      });
      const _language = await newLanguage.save();
      if (profile) {
        profile.languages.push(newLanguage);
        await profile.save();
      }
      return _language;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, language: Language): Promise<Language> {
    try {
      return await this.languageModel.findByIdAndUpdate(
        id,
        { ...language },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<Language> {
    try {
      const language = await this.languageModel.findByIdAndRemove(id);
      const profile = await this.profileModel.findOne({
        _id: language.profileId,
      });

      if (profile) {
        await this.profileModel.updateOne({
          $pull: { languages: language._id },
        });
      }
      return language;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
