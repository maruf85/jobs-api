import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { AuthService } from 'src/auth/auth.service';
import { ProfilesService } from 'src/profiles/profiles.service';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Company } from 'src/company/interfaces/company.interface';
import { CompanyService } from 'src/company/company.service';
export declare class UsersService {
    private readonly userModel;
    private readonly authService;
    private readonly profileService;
    private readonly companyService;
    constructor(userModel: Model<User>, authService: AuthService, profileService: ProfilesService, companyService: CompanyService);
    findAll(): Promise<User[]>;
    findByUserName(username: string): Promise<User | undefined>;
    findById(userId: string): Promise<User | undefined>;
    createProfile(profile: Profile, userInterface: User): Promise<User>;
    createCompany(company: Company, userInterface: User): Promise<User>;
    update(id: string, user: User): Promise<User>;
    delete(id: string): Promise<User>;
}
