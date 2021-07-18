import * as mongoose from 'mongoose';
export declare class JobActivity extends mongoose.Document {
    jobId: string;
    profileId: string;
    applyDate: Date;
}
export declare const JobActivitySchema: mongoose.Schema<JobActivity, mongoose.Model<any, any, any>, undefined>;
