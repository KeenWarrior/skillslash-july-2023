import { Injectable } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  register(RegisterDto: RegisterDto): Promise<User> {
    return this.usersService.create(RegisterDto);
  }

  login(LoginDto: LoginDto): Promise<User> {
    return this.usersService.login(LoginDto.email, LoginDto.password);
  }

  generateToken(user: User): string {
    const payload = {
      name: user.name,
      email: user.email,
      sub: user._id,
      role: user.role
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
  }
}
