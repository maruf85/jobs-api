/// <reference types="multer" />
import { CompanyService } from './company.service';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './interfaces/company.interface';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    findAll(): Promise<Company[]>;
    findOne(id: string): Promise<Company>;
    update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company>;
    uploadImage(file: Express.Multer.File, companyId: string): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
}
