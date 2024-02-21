/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { UserInfoDocument } from './user.schema';
import { UserInsertRequestDTO } from './dto/user_register_request';
import { UserInfoLoginRequestDTO } from './dto/user_login_request';
import { UserInfoForGotRequestDTO } from './dto/user_forgot_request';
import { UserInfoResponseDTO } from './dto/user_response';
import { UserInfoSendMailRequestDTO } from './dto/user_sendmail_request';
import { MailerService } from '@nestjs-modules/mailer';
import { UserInfoRegisterResponseDTO } from './dto/user_register_response';
export declare class UserInfoService {
    private readonly userModel;
    private readonly mailerService;
    constructor(userModel: Model<UserInfoDocument>, mailerService: MailerService);
    RegisterUser(requestDTO: UserInsertRequestDTO): Promise<UserInfoRegisterResponseDTO | UserInfoResponseDTO>;
    LoginUser(requestDTO: UserInfoLoginRequestDTO): Promise<any | UserInfoResponseDTO>;
    ForGotPass(requestDTO: UserInfoForGotRequestDTO): Promise<UserInfoResponseDTO>;
    ChangePassword(requestDTO: any): Promise<UserInfoResponseDTO>;
    VerifyUser(requestDTO: UserInfoSendMailRequestDTO): Promise<UserInfoResponseDTO | any>;
    UpdateInfoUser(requestDTO: UserInsertRequestDTO | any): Promise<UserInfoResponseDTO>;
    GetEmailAllUsersInfor(): Promise<UserInsertRequestDTO[]>;
}
