import { Document } from 'mongoose';
import { JobType } from 'src/constants/jobType.enum';
import { SkillLevel } from 'src/constants/skillLevel.enum';

export interface JobInterface extends Document {
  title: string;
  description?: string;
  deadline?: Date;
  jobType?: JobType;
  skillLevel?: SkillLevel;
  salary?: string;
  isRemote?: boolean;
  isActive: boolean;
  isPublished: boolean;
  applicants?: string;
}
