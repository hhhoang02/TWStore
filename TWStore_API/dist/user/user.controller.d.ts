import { UserService } from './user.service';
import { Response } from 'express';
import { UserUpdateInfoRequestDTO } from './dto/user_updateInfo_request';
import { UserAddressDTO } from './dto/user_updateAddress_request';
import { UserGetByIDRequestDTO } from './dto/user_getByID_request';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    GetAllUsers(res: Response): Promise<Response<any, Record<string, any>>>;
    getUserByID(_id: UserGetByIDRequestDTO, body: {
        name: string;
        email: string;
    }, res: Response): Promise<Response<any, Record<string, any>>>;
    UpdateInfoUser(body: UserUpdateInfoRequestDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    UpdateAddressUser(body: UserAddressDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
