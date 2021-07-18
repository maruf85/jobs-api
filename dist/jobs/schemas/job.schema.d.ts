import * as mongoose from 'mongoose';
import { JobType } from 'src/constants/jobType.enum';
import { SkillLevel } from 'src/constants/skillLevel.enum';
import { Profile } from 'src/profiles/interfaces/profile.interface';
export declare class Job extends mongoose.Document {
    title: string;
    description: string;
    deadline: Date;
    jobType: JobType;
    skillLevel: SkillLevel;
    salary: string;
    isRemote: boolean;
    isActive: boolean;
    isPublished: boolean;
    companyId: string;
    applicants: Profile;
}
export declare const JobSchema: mongoose.Schema<Job, mongoose.Model<any, any, any>, undefined>;
