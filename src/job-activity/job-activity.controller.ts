import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateJobActivityDto } from './dto/create-job-activity.dto';
import { JobActivityInterface } from './interfaces/job-activity.interface';
import { JobActivityService } from './job-activity.service';
import { JobActivity } from './schemas/job-activity.schema';

@Controller('job-activity')
export class JobActivityController {
  constructor(private readonly jobActivityService: JobActivityService) {}

  @Get()
  public async findAll(): Promise<JobActivity[]> {
    return await this.jobActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<JobActivity> {
    return this.jobActivityService.findOne(id);
  }

  @Post()
  public async create(
    @Body() createJobActivityDto: CreateJobActivityDto,
  ): Promise<JobActivityInterface> {
    return await this.jobActivityService.create(createJobActivityDto);
  }
}
