import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from 'src/company/interfaces/company.interface';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobInterface } from './interfaces/job.interface';
import { Job } from './schemas/job.schema';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel('Job')
    private readonly jobModel: Model<Job>,
    @InjectModel('Company')
    private readonly companyModel: Model<Company>,
  ) {}

  public async findAll(): Promise<Job[]> {
    try {
      return await this.jobModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  public async findOne(jobId: string): Promise<Job> {
    try {
      const job = await this.jobModel.findOne({ _id: jobId });

      if (!job) {
        throw new NotFoundException('Company Info does not exist!');
      }

      return job;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  public async create(createJobDto: CreateJobDto): Promise<JobInterface> {
    try {
      const company = await this.companyModel.findOne({
        _id: createJobDto.companyId,
      });

      const newJob = new this.jobModel({
        ...createJobDto,
      });

      const job = await newJob.save();

      if (company) {
        company.jobs.push(newJob);
        await company.save();
      }

      return job;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(
    jobId: string,
    updateJobDto: UpdateJobDto,
  ): Promise<JobInterface> {
    try {
      return await this.jobModel.findByIdAndUpdate(
        jobId,
        { ...updateJobDto },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(jobId: string): Promise<any> {
    try {
      const job = await this.jobModel.findByIdAndRemove(jobId);
      const company = await this.companyModel.findOne({
        _id: job.companyId,
      });

      if (company) {
        await this.companyModel.updateOne({
          $pull: { jobs: job._id },
        });
      }
      return job;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
