import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Certification } from './interfaces/certification.interface';

@Injectable()
export class CertificationsService {
  constructor(
    @InjectModel('Certification')
    private readonly certificationModel: Model<Certification>,
    @InjectModel('Profile')
    private readonly profileModel: Model<Profile>,
  ) {}

  async findAll(): Promise<Certification[]> {
    try {
      return await this.certificationModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<Certification> {
    try {
      return await this.certificationModel.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(certification: Certification): Promise<Certification> {
    try {
      const profile = await this.profileModel.findOne({
        _id: certification.profileId,
      });
      const newCertification = new this.certificationModel({
        ...certification,
      });
      const _certification = await newCertification.save();
      if (profile) {
        profile.certifications.push(newCertification);
        await profile.save();
      }
      return _certification;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(
    id: string,
    certification: Certification,
  ): Promise<Certification> {
    try {
      return await this.certificationModel.findByIdAndUpdate(
        id,
        { ...certification },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<Certification> {
    try {
      const certification = await this.certificationModel.findByIdAndRemove(id);
      const profile = await this.profileModel.findOne({
        _id: certification.profileId,
      });

      if (profile) {
        await this.profileModel.updateOne({
          $pull: { experiences: certification._id },
        });
      }
      return certification;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
