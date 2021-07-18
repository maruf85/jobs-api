/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { ProfilesService } from 'src/profiles/profiles.service';
import { CompanyService } from 'src/company/company.service';
export declare class CloudinaryService {
    private readonly profileService;
    private readonly companyService;
    constructor(profileService: ProfilesService, companyService: CompanyService);
    uploadUserProfileImage(file: Express.Multer.File, profileId: string): Promise<UploadApiResponse | UploadApiErrorResponse>;
    uploadCompanyProfileImage(file: Express.Multer.File, companyId: string): Promise<UploadApiResponse | UploadApiErrorResponse>;
}
