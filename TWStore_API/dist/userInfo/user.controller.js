"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoController = void 0;
const common_1 = require("@nestjs/common");
const user_register_request_1 = require("./dto/user_register_request");
const user_login_request_1 = require("./dto/user_login_request");
const user_forgot_request_1 = require("./dto/user_forgot_request");
const user_sendmail_request_1 = require("./dto/user_sendmail_request");
const user_service_1 = require("./user.service");
let UserInfoController = class UserInfoController {
    constructor(userService) {
        this.userService = userService;
    }
    async RegisterUser(body, res) {
        try {
            body = { ...body, role: 'user' };
            const responseDTO = await this.userService.RegisterUser(body);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async LoginUser(body, res) {
        try {
            const responseDTO = await this.userService.LoginUser(body);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async ForGotPass(body, res) {
        try {
            const responseDTO = await this.userService.ForGotPass(body);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async SendMail(body, res) {
        try {
            const responseDTO = await this.userService.VerifyUser(body);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async ChangePassword(body, res) {
        try {
            const responseDTO = await this.userService.ChangePassword(body);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async UpdateInfoUser(body, res) {
        try {
            const user = await this.userService.UpdateInfoUser(body);
            return res.status(common_1.HttpStatus.OK).json(user);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async GetEmailAllUsersInfor(res) {
        try {
            const responseDTO = await this.userService.GetEmailAllUsersInfor();
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
};
exports.UserInfoController = UserInfoController;
__decorate([
    (0, common_1.Post)('RegisterUser'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_register_request_1.UserInsertRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "RegisterUser", null);
__decorate([
    (0, common_1.Post)('LoginUser'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_request_1.UserInfoLoginRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "LoginUser", null);
__decorate([
    (0, common_1.Post)('ForgotPassword'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_forgot_request_1.UserInfoForGotRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "ForGotPass", null);
__decorate([
    (0, common_1.Post)('VerifyEmail'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_sendmail_request_1.UserInfoSendMailRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "SendMail", null);
__decorate([
    (0, common_1.Post)('ChangePassword'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "ChangePassword", null);
__decorate([
    (0, common_1.Post)('updateInfoUser'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_register_request_1.UserInsertRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "UpdateInfoUser", null);
__decorate([
    (0, common_1.Get)('getEmailAllUsersInfor'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserInfoController.prototype, "GetEmailAllUsersInfor", null);
exports.UserInfoController = UserInfoController = __decorate([
    (0, common_1.Controller)('usersInfo'),
    __metadata("design:paramtypes", [user_service_1.UserInfoService])
], UserInfoController);
//# sourceMappingURL=user.controller.js.map