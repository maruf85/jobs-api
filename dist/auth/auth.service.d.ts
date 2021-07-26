import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any, response: Response): Promise<{
        message: string;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string | undefined, passwordHash: string | undefined): Promise<boolean>;
    verifyAuth(request: Request): Promise<import("../users/interfaces/user.interface").User>;
}
