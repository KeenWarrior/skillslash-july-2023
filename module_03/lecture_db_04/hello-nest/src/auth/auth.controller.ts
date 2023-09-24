import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.login(loginDto);
    if (!!user) {
      return {
        name: user.name,
        id: user._id,
        email: user.email,
        token: this.authService.generateToken(user),
      };
    } else {
      throw new HttpErrorByCode[401]("Unauthorized");
    }
  }
}
