import { CompanyInfo } from 'src/company-info/interfaces/company-info.interface';
import { Job } from 'src/jobs/schemas/job.schema';
export interface Company {
    id?: string;
    name?: string;
    description?: string;
    businessStream?: string;
    profileImage?: string;
    companyInfo?: CompanyInfo;
    jobs?: Job[];
}
