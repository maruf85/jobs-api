import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from 'src/company/schemas/company.schema';
import { JobSchema } from './schemas/job.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
    MongooseModule.forFeature([{ name: 'Job', schema: JobSchema }]),
  ],
  providers: [JobsService],
  controllers: [JobsController],
})
export class JobsModule {}
