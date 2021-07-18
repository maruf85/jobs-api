/// <reference types="multer" />
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './interfaces/profile.interface';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private readonly profileService;
    constructor(profileService: ProfilesService);
    findAll(): Promise<Profile[]>;
    findOne(id: string): Promise<Profile>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile>;
    uploadImage(file: Express.Multer.File, profileId: string): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
}
