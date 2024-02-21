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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_updateInfo_request_1 = require("./dto/user_updateInfo_request");
const user_updateAddress_request_1 = require("./dto/user_updateAddress_request");
const user_getByID_request_1 = require("./dto/user_getByID_request");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async GetAllUsers(res) {
        try {
            const responseDTO = await this.userService.GetAllUsers();
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async getUserByID(_id, body, res) {
        try {
            const user = await this.userService.GetUserByID({ _id, body });
            return res.status(common_1.HttpStatus.OK).json(user);
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
    async UpdateAddressUser(body, res) {
        try {
            const user = await this.userService.UpdateAddressUser(body);
            return res.status(common_1.HttpStatus.OK).json(user);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('getAllUsers'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "GetAllUsers", null);
__decorate([
    (0, common_1.Post)('getUser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_getByID_request_1.UserGetByIDRequestDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByID", null);
__decorate([
    (0, common_1.Post)('updateInfoUser'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_updateInfo_request_1.UserUpdateInfoRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UpdateInfoUser", null);
__decorate([
    (0, common_1.Post)('updateAddressUser'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_updateAddress_request_1.UserAddressDTO, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UpdateAddressUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map