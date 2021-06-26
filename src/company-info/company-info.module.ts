import { Module } from '@nestjs/common';
import { CompanyInfoService } from './company-info.service';
import { CompanyInfoController } from './company-info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from 'src/company/schemas/company.schema';
import { CompanyInfoSchema } from './schemas/company-info.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
    MongooseModule.forFeature([
      { name: 'CompanyInfo', schema: CompanyInfoSchema },
    ]),
  ],
  providers: [CompanyInfoService],
  controllers: [CompanyInfoController],
  exports: [CompanyInfoService],
})
export class CompanyInfoModule {}
