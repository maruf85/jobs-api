import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanySchema } from './schemas/company.schema';

@Module({
  imports: [
    forwardRef(() => CloudinaryModule),
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
