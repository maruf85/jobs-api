import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(email);
      const isMatch = user
        ? await this.comparePassword(password, user.password)
        : null;

      if (user && isMatch) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async login(user: any, response: Response) {
    const _user = await this.usersService.findByEmail(user.email);

    try {
      const payload = { email: user.email, sub: _user.id };
      const jwt = await this.jwtService.signAsync(payload);

      response.cookie('jwt', jwt, {
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      });

      return {
        message: 'Login Success',
      };
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async logout(response: Response) {
    response.clearCookie('jwt', {
      sameSite: 'none',
      secure: true,
    });

    return {
      message: 'Logout Success',
    };
  }

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  async comparePassword(
    password: string | undefined,
    passwordHash: string | undefined,
  ): Promise<boolean> {
    return await bcrypt.compare(password, passwordHash);
  }

  async verifyAuth(request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.usersService.findById(data['sub']);

      return user;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
