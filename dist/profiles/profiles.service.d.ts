/// <reference types="multer" />
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Profile } from './interfaces/profile.interface';
export declare class ProfilesService {
    private readonly profileModel;
    private cloudinaryService;
    constructor(profileModel: Model<Profile>, cloudinaryService: CloudinaryService);
    findAll(): Promise<Profile[]>;
    findOne(id: string): Promise<Profile>;
    create(profile: Profile): Promise<Profile>;
    update(id: string, profile: Profile): Promise<Profile>;
    updateProfileImage(id: string, imageUrl: string, profile?: Profile): Promise<Profile>;
    uploadImageToCloudinary(file: Express.Multer.File, profileId: string): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
}
