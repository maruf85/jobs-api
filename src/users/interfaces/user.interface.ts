import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Role } from '../../constants/role.enum';

export interface User {
  id?: string;
  username: string;
  email?: string;
  password: string;
  role?: Role;
  profile?: Profile;
  createdAt?: Date;
  updatedAt?: Date;
}
