import { forwardRef, Module } from '@nestjs/common';
import { ProfilesModule } from 'src/profiles/profiles.module';
import { Cloudinary } from './cloudinary';
import { CloudinaryService } from './cloudinary.service';

@Module({
  imports: [forwardRef(() => ProfilesModule)],
  providers: [Cloudinary, CloudinaryService],
  exports: [Cloudinary, CloudinaryService],
})
export class CloudinaryModule {}
