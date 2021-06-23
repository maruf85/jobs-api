import { Company } from 'src/company/interfaces/company.interface';
import { UserType } from 'src/constants/userType.enum';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Role } from '../../constants/role.enum';

export interface User {
  id?: string;
  username: string;
  email?: string;
  password: string;
  role?: Role;
  userType?: UserType;
  profile?: Profile;
  company?: Company;
}
