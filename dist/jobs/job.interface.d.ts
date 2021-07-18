import { Company } from 'src/company/interfaces/company.interface';
export interface JobInterface {
    title?: string;
    description?: string;
    companyId?: Company;
}
