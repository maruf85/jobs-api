import { CompanyInfo } from 'src/company-info/interfaces/company-info.interface';
import { Job } from 'src/jobs/schemas/job.schema';

export class BaseCompanyDto {
  readonly name?: string;
  readonly description?: string;
  readonly businessStream?: string;
  readonly profileImage?: string;
  readonly companyInfo?: CompanyInfo;
  readonly jobs?: Job[];
}
