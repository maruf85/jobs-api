import { Model } from 'mongoose';
import { Company } from 'src/company/interfaces/company.interface';
import { CompanyInfo } from './interfaces/company-info.interface';
export declare class CompanyInfoService {
    private readonly companyInfoModel;
    private readonly companyModel;
    constructor(companyInfoModel: Model<CompanyInfo>, companyModel: Model<Company>);
    findAll(): Promise<CompanyInfo[]>;
    findOne(id: string): Promise<CompanyInfo>;
    create(companyInfo: CompanyInfo): Promise<CompanyInfo>;
    update(id: string, companyInfo: CompanyInfo): Promise<CompanyInfo>;
    delete(id: string): Promise<CompanyInfo>;
}
