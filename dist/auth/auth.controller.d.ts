import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/interfaces/user.interface';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    create(createProfileDto: CreateProfileDto, createCompanyDto: CreateCompanyDto, createUserDto: CreateUserDto): Promise<User>;
    login(req: any): any;
    protected(): string;
}
