import { UserInfoService } from "src/userInfo/user.service";
export declare class AuthService {
    private userInfoService;
    constructor(userInfoService: UserInfoService);
    signIn(request: any): Promise<{
        status: boolean;
        message: string;
        user?: undefined;
    } | {
        user: any;
        status: boolean;
        message?: undefined;
    }>;
}
