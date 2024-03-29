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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./user.schema");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async GetUserByID(requestDTO) {
        try {
            const { _id, body } = requestDTO;
            const { name, email } = body;
            const user = await this.userModel.findOne({ _idUser: _id }).populate([{ path: 'cartItem', populate: [{ path: 'productID', model: 'Product', select: ['productName', 'offer', 'price', 'image'] }, { path: 'sizeProduct', model: 'Size' }, { path: 'colorProduct', model: 'Color' }] }]);
            if (user) {
                const payload = { sub: user._id, name: user.name };
                return {
                    status: true,
                    message: 'Get User successfully',
                    data: user,
                    access_token: await this.jwtService.signAsync(payload),
                };
            }
            let newUser = new this.userModel({ _idUser: _id, name, email, phone: null, active: true, avatar: null, cartItem: [], gender: null, birthDay: null, address: [] });
            await newUser.save();
            return {
                status: true,
                message: 'New User',
                data: newUser,
                access_token: await this.jwtService.signAsync({ sub: newUser._id, name: newUser.name }),
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Get User error',
                data: null,
            };
        }
    }
    async UpdateActiveUser(responseDTO) {
        try {
            const { _id, active = null } = responseDTO;
            const { id } = _id;
            const user = await this.userModel.findById(id);
            if (!user) {
                return {
                    status: false,
                    message: 'User not found'
                };
            }
            if (active == 'true') {
                user.active = false;
            }
            else {
                user.active = true;
            }
            await user.save();
            return {
                status: true,
                message: 'Update User successfully'
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    async UpdateInfoUser(requestDTO) {
        try {
            const { _id, name = null, phone = null, avatar = null, gender = null, birthDay = null, email = null, cartItem = [] } = requestDTO;
            const user = await this.userModel.findOne({ _idUser: _id });
            if (user) {
                user.name = name ? name : user.name;
                user.phone = phone ? phone : user.phone;
                user.avatar = avatar ? avatar : user.avatar;
                user.gender = gender ? gender : user.gender;
                user.birthDay = birthDay ? birthDay : user.birthDay;
                user.email = email ? email : user.email;
                user.cartItem = cartItem;
                await user.save();
                return {
                    status: true,
                    message: 'Update User successfully'
                };
            }
            return {
                status: false,
                message: 'Update User failed'
            };
        }
        catch (error) {
            return {
                status: false,
                message: 'Update favoUserrite error'
            };
        }
    }
    async UpdateAddressUser(requestDTO) {
        try {
            const { _idUser, typeUpdate, position, city, district, ward, street = "" } = requestDTO;
            const user = await this.userModel.findOne({ _idUser });
            if (typeUpdate === "insert") {
                user.address.push({ position: user.address.length + 1, city, district, ward, street });
                await user.save();
                return {
                    status: true,
                    message: 'Add address successfully',
                };
            }
            else {
                user.address.splice(position - 1, 1);
                await user.save();
                return {
                    status: true,
                    message: 'Delete address successfully',
                };
            }
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Update address failed',
            };
        }
    }
    async GetAllUsers() {
        try {
            const responseDTO = await this.userModel.find();
            return responseDTO;
        }
        catch (error) {
            return error;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map