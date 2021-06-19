import { Module } from '@nestjs/common';
import { CertificationsService } from './certifications.service';
import { CertificationsController } from './certifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema } from 'src/profiles/schemas/profile.schema';
import { CertificationSchema } from './schemas/certification.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }]),
    MongooseModule.forFeature([
      { name: 'Certification', schema: CertificationSchema },
    ]),
  ],
  providers: [CertificationsService],
  controllers: [CertificationsController],
  exports: [CertificationsService],
})
export class CertificationsModule {}
