import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class JobActivity extends mongoose.Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  })
  jobId: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  })
  profileId: string;

  @Prop({
    required: true,
    default: Date.now(),
  })
  applyDate: Date;
}

export const JobActivitySchema = SchemaFactory.createForClass(JobActivity);
