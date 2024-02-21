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
import { UserDocument } from './user.schema';
import { UserResponseDTO } from './dto/user_response';
import { UserGetByIDResponseDTO } from './dto/user_getByID_response';
import { UserAddressDTO } from './dto/user_updateAddress_request';
import { UserUpdateInfoRequestDTO } from './dto/user_updateInfo_request';
import { UserGetAllResponseDTO } from './dto/user_getAll_response';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    GetUserByID(requestDTO: any): Promise<UserGetByIDResponseDTO | any>;
    UpdateActiveUser(responseDTO: UserUpdateInfoRequestDTO | any): Promise<UserResponseDTO>;
    UpdateInfoUser(requestDTO: UserUpdateInfoRequestDTO | any): Promise<UserResponseDTO>;
    UpdateAddressUser(requestDTO: UserAddressDTO): Promise<UserResponseDTO>;
    GetAllUsers(): Promise<UserGetAllResponseDTO[]>;
}
