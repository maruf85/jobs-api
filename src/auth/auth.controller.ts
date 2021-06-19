import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Role } from 'src/constants/role.enum';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/interfaces/user.interface';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { Roles } from './decorators/roles.decorator';
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
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.usersService.create(createProfileDto, createUserDto);
  }

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  login(@Request() req: any): any {
    return this.authService.login(req.user._doc);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('protected')
  protected(): string {
    return 'protected route';
  }
}