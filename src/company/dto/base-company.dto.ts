import { CompanyInfo } from 'src/company-info/interfaces/company-info.interface';

export class BaseCompanyDto {
  readonly name?: string;
  readonly description?: string;
  readonly businessStream?: string;
  readonly profileImage?: string;
  readonly companyInfo?: CompanyInfo;
}
