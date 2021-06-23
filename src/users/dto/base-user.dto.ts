import { UserType } from 'src/constants/userType.enum';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Role } from '../../constants/role.enum';

export class BaseUserDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly profile: Profile;
  readonly role: Role;
  readonly userType: UserType;
}
