import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobInterface } from 'src/jobs/interfaces/job.interface';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { CreateJobActivityDto } from './dto/create-job-activity.dto';
import { JobActivity } from './schemas/job-activity.schema';

@Injectable()
export class JobActivityService {
  constructor(
    @InjectModel('JobActivity')
    private readonly jobActivityModel: Model<JobActivity>,
    @InjectModel('Job')
    private readonly jobModel: Model<JobInterface>,
    @InjectModel('Profile')
    private readonly profileModel: Model<Profile>,
  ) {}

  public async findAll(): Promise<JobActivity[]> {
    try {
      return await this.jobActivityModel.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findOne(id: string): Promise<JobActivity> {
    try {
      return await this.jobActivityModel.findOne({ _id: id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async create(
    createJobActivityDto: CreateJobActivityDto,
  ): Promise<any> {
    try {
      const job = await this.jobModel.findOne({
        _id: createJobActivityDto.jobId,
      });

      const profile = await this.profileModel.findOne({
        _id: createJobActivityDto.profileId,
      });

      const newJobActivity = new this.jobActivityModel({
        ...createJobActivityDto,
      });

      const isjobApplied = profile.jobs.includes(createJobActivityDto.jobId);

      if (isjobApplied) {
        throw new HttpException('Already applied', HttpStatus.BAD_REQUEST);
      }

      if (profile && job) {
        profile.jobs.push(newJobActivity.jobId);
        await profile.save();

        job.applicants.push(newJobActivity.profileId);
        await job.save();
      }

      return await newJobActivity.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
