import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { JobInterface } from './interfaces/job.interface';
import { Job } from './schemas/job.schema';
import { JobsService } from './jobs.service';
import { UpdateJobDto } from './dto/update-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  public async findAll(): Promise<Job[]> {
    return await this.jobsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Job> {
    return await this.jobsService.findOne(id);
  }

  @Post()
  public async create(
    @Body() createJobDto: CreateJobDto,
  ): Promise<JobInterface> {
    return await this.jobsService.create(createJobDto);
  }

  @Put(':id')
  update(
    @Param('id') jobId: string,
    @Body() updateJobDto: UpdateJobDto,
  ): Promise<JobInterface> {
    return this.jobsService.update(jobId, updateJobDto);
  }

  @Delete(':id')
  public async remove(@Param('id') jobId: string): Promise<any> {
    return await this.jobsService.delete(jobId);
  }
}
