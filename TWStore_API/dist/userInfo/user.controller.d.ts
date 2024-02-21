import { UserInsertRequestDTO } from './dto/user_register_request';
import { UserInfoLoginRequestDTO } from './dto/user_login_request';
import { UserInfoForGotRequestDTO } from './dto/user_forgot_request';
import { UserInfoSendMailRequestDTO } from './dto/user_sendmail_request';
import { UserInfoService } from './user.service';
import { Response } from "express";
export declare class UserInfoController {
    private readonly userService;
    constructor(userService: UserInfoService);
    RegisterUser(body: UserInsertRequestDTO, res: any): Promise<any>;
    LoginUser(body: UserInfoLoginRequestDTO, res: any): Promise<any>;
    ForGotPass(body: UserInfoForGotRequestDTO, res: any): Promise<any>;
    SendMail(body: UserInfoSendMailRequestDTO, res: any): Promise<any>;
    ChangePassword(body: any, res: any): Promise<any>;
    UpdateInfoUser(body: UserInsertRequestDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    GetEmailAllUsersInfor(res: Response): Promise<Response<any, Record<string, any>>>;
}
