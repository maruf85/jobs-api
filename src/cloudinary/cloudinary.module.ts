import { forwardRef, Module } from '@nestjs/common';
import { CompanyModule } from 'src/company/company.module';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { Cloudinary } from './cloudinary';
import { CloudinaryService } from './cloudinary.service';

@Module({
  imports: [forwardRef(() => ProfilesModule), forwardRef(() => CompanyModule)],
  providers: [Cloudinary, CloudinaryService],
  exports: [Cloudinary, CloudinaryService],
})
export class CloudinaryModule {}
