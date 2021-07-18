import { CreateJobActivityDto } from './dto/create-job-activity.dto';
import { JobActivityInterface } from './interfaces/job-activity.interface';
import { JobActivityService } from './job-activity.service';
import { JobActivity } from './schemas/job-activity.schema';
export declare class JobActivityController {
    private readonly jobActivityService;
    constructor(jobActivityService: JobActivityService);
    findAll(): Promise<JobActivity[]>;
    findOne(id: string): Promise<JobActivity>;
    create(createJobActivityDto: CreateJobActivityDto): Promise<JobActivityInterface>;
}
