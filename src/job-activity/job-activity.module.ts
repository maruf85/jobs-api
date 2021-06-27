import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobSchema } from 'src/jobs/schemas/job.schema';
import { ProfileSchema } from 'src/profiles/schemas/profile.schema';
import { JobActivityController } from './job-activity.controller';
import { JobActivityService } from './job-activity.service';
import { JobActivitySchema } from './schemas/job-activity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }]),
    MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }]),
    MongooseModule.forFeature([
      { name: 'JobActivity', schema: JobActivitySchema },
    ]),
  ],
  controllers: [JobActivityController],
  providers: [JobActivityService],
})
export class JobActivityModule {}
