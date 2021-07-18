import { Model } from 'mongoose';
import { JobInterface } from 'src/jobs/interfaces/job.interface';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { CreateJobActivityDto } from './dto/create-job-activity.dto';
import { JobActivity } from './schemas/job-activity.schema';
export declare class JobActivityService {
    private readonly jobActivityModel;
    private readonly jobModel;
    private readonly profileModel;
    constructor(jobActivityModel: Model<JobActivity>, jobModel: Model<JobInterface>, profileModel: Model<Profile>);
    findAll(): Promise<JobActivity[]>;
    findOne(id: string): Promise<JobActivity>;
    create(createJobActivityDto: CreateJobActivityDto): Promise<any>;
}
