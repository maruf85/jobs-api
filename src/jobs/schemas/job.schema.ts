import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { JobType } from 'src/constants/jobType.enum';
import { SkillLevel } from 'src/constants/skillLevel.enum';
import { Profile } from 'src/profiles/interfaces/profile.interface';

@Schema({ timestamps: true })
export class Job extends mongoose.Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  deadline: Date;

  @Prop({ enum: JobType })
  jobType: JobType;

  @Prop({ enum: SkillLevel })
  skillLevel: SkillLevel;

  @Prop()
  salary: string;

  @Prop()
  isRemote: boolean;

  @Prop({ required: true, default: true })
  isActive: boolean;

  @Prop({ required: true, default: true })
  isPublished: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  })
  companyId: string;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
    },
  ])
  applicants: Profile;
}

export const JobSchema = SchemaFactory.createForClass(Job);
