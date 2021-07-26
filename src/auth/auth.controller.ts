import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { CreateCompanyDto } from 'src/company/dto/create-company.dto';
import { Role } from 'src/constants/role.enum';
import { UserType } from 'src/constants/userType.enum';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/interfaces/user.interface';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { Roles } from './decorators/roles.decorator';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGaurd } from './guards/local-auth.gaurd';
import { RolesGuard } from './guards/roles.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('register')
  create(
    @Body() createProfileDto: CreateProfileDto,
    @Body() createCompanyDto: CreateCompanyDto,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return createUserDto.userType === UserType.RECRUITER
      ? this.usersService.createCompany(createCompanyDto, createUserDto)
      : this.usersService.createProfile(createProfileDto, createUserDto);
  }

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) response: Response,
  ): any {
    return this.authService.login(loginUserDto, response);
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    return this.authService.logout(response);
  }

  @Get('verify-auth')
  user(@Req() request: Request) {
    return this.authService.verifyAuth(request);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('protected')
  protected(): string {
    return 'protected route';
  }
}
