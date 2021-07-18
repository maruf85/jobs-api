import { CompanyInfoService } from './company-info.service';
import { CreateCompanyInfoDto } from './dto/create-company-info.dto';
import { UpdateCompanyInfoDto } from './dto/update-company-info.dto';
import { CompanyInfo } from './interfaces/company-info.interface';
export declare class CompanyInfoController {
    private readonly companyInfoService;
    constructor(companyInfoService: CompanyInfoService);
    findAll(): Promise<CompanyInfo[]>;
    findOne(id: string): Promise<CompanyInfo>;
    create(createCompanyInfoDto: CreateCompanyInfoDto): Promise<CompanyInfo>;
    update(id: string, updateCompanyInfoDto: UpdateCompanyInfoDto): Promise<CompanyInfo>;
    remove(id: string): Promise<CompanyInfo>;
}
