import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './schemas/job.schema';
import { JobsService } from './jobs.service';
import { UpdateJobDto } from './dto/update-job.dto';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    findAll(): Promise<Job[]>;
    findOne(id: string): Promise<Job>;
    create(createJobDto: CreateJobDto): Promise<Job>;
    update(jobId: string, updateJobDto: UpdateJobDto): Promise<Job>;
    remove(jobId: string): Promise<any>;
}
