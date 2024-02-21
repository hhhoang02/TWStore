import { AuthService } from "./auth.service";
import { UserInfoLoginRequestDTO } from "src/userInfo/dto/user_login_request";
import { Response, Request } from "express";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: Record<string, any>): Promise<{
        status: boolean;
        message: string;
        user?: undefined;
    } | {
        user: any;
        status: boolean;
        message?: undefined;
    }>;
    home(res: Response): Promise<{
        message: string;
    }>;
    Login(req: Request, body: UserInfoLoginRequestDTO, res: Response): Promise<void>;
}
