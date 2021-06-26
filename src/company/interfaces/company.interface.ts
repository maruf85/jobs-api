import { CompanyInfo } from 'src/company-info/interfaces/company-info.interface';

export interface Company {
  id?: string;
  name?: string;
  description?: string;
  businessStream?: string;
  profileImage?: string;
  companyInfo?: CompanyInfo;
}
