/// <reference types="multer" />
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Company } from './interfaces/company.interface';
export declare class CompanyService {
    private readonly companyModel;
    private cloudinaryService;
    constructor(companyModel: Model<Company>, cloudinaryService: CloudinaryService);
    findAll(): Promise<Company[]>;
    findOne(id: string): Promise<Company>;
    create(company: Company): Promise<Company>;
    update(id: string, company: Company): Promise<Company>;
    updateProfileImage(id: string, imageUrl: string, company?: Company): Promise<Company>;
    uploadImageToCloudinary(file: Express.Multer.File, companyId: string): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
}
