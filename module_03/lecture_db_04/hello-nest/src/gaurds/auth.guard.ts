import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthGuard implements CanActivate {
  validateRequest(request: any): boolean | Promise<boolean> {
    const auth = request.headers.authorization;

    console.log("Auth", auth);

    if (!auth) {
      return false;
    }

    const [authType, token] = auth.split(" ");
    if (authType !== "Bearer") {
      return false;
    }

    if (!token) {
      return false;
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      request.user = decoded;
      return true;
    } catch (err) {
      return false;
    }
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }
}
