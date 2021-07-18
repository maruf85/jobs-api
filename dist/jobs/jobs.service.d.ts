import { Model } from 'mongoose';
import { Company } from 'src/company/interfaces/company.interface';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './schemas/job.schema';
export declare class JobsService {
    private readonly jobModel;
    private readonly companyModel;
    constructor(jobModel: Model<Job>, companyModel: Model<Company>);
    findAll(): Promise<Job[]>;
    findOne(jobId: string): Promise<Job>;
    create(createJobDto: CreateJobDto): Promise<Job>;
    update(jobId: string, updateJobDto: UpdateJobDto): Promise<Job>;
    delete(jobId: string): Promise<any>;
}
