import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { ProfilesService } from 'src/profiles/profiles.service';
import { CompanyService } from 'src/company/company.service';

@Injectable()
export class CloudinaryService {
  constructor(
    @Inject(forwardRef(() => ProfilesService))
    private readonly profileService: ProfilesService,
    @Inject(forwardRef(() => CompanyService))
    private readonly companyService: CompanyService,
  ) {}

  async uploadUserProfileImage(
    file: Express.Multer.File,
    profileId: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    try {
      return new Promise((resolve, reject) => {
        const upload = v2.uploader.upload_stream((error, result) => {
          if (error) return reject(error);
          resolve(result);
          const imageUrl = result.secure_url;
          this.profileService.updateProfileImage(profileId, imageUrl);
        });
        toStream(file.buffer).pipe(upload);
      });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async uploadCompanyProfileImage(
    file: Express.Multer.File,
    companyId: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    try {
      return new Promise((resolve, reject) => {
        const upload = v2.uploader.upload_stream((error, result) => {
          if (error) return reject(error);
          resolve(result);
          const imageUrl = result.secure_url;
          this.companyService.updateProfileImage(companyId, imageUrl);
        });
        toStream(file.buffer).pipe(upload);
      });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
