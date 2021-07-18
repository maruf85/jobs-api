import * as mongoose from 'mongoose';
import { Company } from 'src/company/interfaces/company.interface';
export declare class Job extends mongoose.Document {
    title: string;
    description: string;
    companyId: Company;
}
export declare const JobSchema: mongoose.Schema<Job, mongoose.Model<any, any, any>, undefined>;
