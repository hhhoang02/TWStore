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
exports.UserInfoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const user_schema_1 = require("./user.schema");
const mailer_1 = require("@nestjs-modules/mailer");
var saltOrRounds;
(function (saltOrRounds) {
    saltOrRounds[saltOrRounds["SALT"] = 10] = "SALT";
})(saltOrRounds || (saltOrRounds = {}));
var Email;
(function (Email) {
    Email["FORM"] = "The Wonder Store";
    Email["SUBJECT"] = "Code verify your mail form TheWonderStore \u2714";
})(Email || (Email = {}));
let UserInfoService = class UserInfoService {
    constructor(userModel, mailerService) {
        this.userModel = userModel;
        this.mailerService = mailerService;
    }
    async RegisterUser(requestDTO) {
        try {
            const { username, email, password, role } = requestDTO;
            const user = await this.userModel.findOne({ email });
            if (user) {
                return {
                    status: false,
                    message: 'User already exists',
                };
            }
            const hashPassword = await bcrypt.hash(password, saltOrRounds.SALT);
            const newUser = new this.userModel({
                username,
                email,
                password: hashPassword,
                role,
            });
            const { _id } = await newUser.save();
            return {
                status: true,
                message: 'Register successfully ',
                _id: _id
            };
        }
        catch (error) {
            return {
                status: false,
                message: 'Failed' + error,
            };
        }
    }
    async LoginUser(requestDTO) {
        try {
            const { email } = requestDTO;
            const user = await this.userModel.findOne({ email });
            if (!user) {
                return {
                    status: false,
                    message: 'User not found',
                };
            }
            return user;
        }
        catch (error) {
        }
    }
    async ForGotPass(requestDTO) {
        try {
            const { email, newPassword } = requestDTO;
            const user = await this.userModel.findOne({ email });
            const hashPassword = await bcrypt.hash(newPassword, saltOrRounds.SALT);
            if (user) {
                (await user).password = hashPassword;
                (await user).save();
                return {
                    status: true,
                    message: 'Update password successfully',
                };
            }
            else {
                return {
                    status: false,
                    message: 'Update password failed',
                };
            }
        }
        catch (error) {
            return {
                status: false,
                message: 'Update password error',
            };
        }
    }
    async ChangePassword(requestDTO) {
        try {
            const { email, oldPassword, newPassword } = requestDTO;
            const user = await this.userModel.findOne({ email });
            let comparePassword = bcrypt.compareSync(oldPassword, (await user).password);
            if (comparePassword) {
                const hashPassword = await bcrypt.hash(newPassword, saltOrRounds.SALT);
                (await user).password = hashPassword;
                (await user).save();
                return {
                    status: true,
                    message: 'Change password successfully',
                };
            }
            else {
                return {
                    status: false,
                    message: 'Change password failed',
                };
            }
        }
        catch (error) {
            return {
                status: false,
                message: 'Change password error',
            };
        }
    }
    async VerifyUser(requestDTO) {
        try {
            const { email } = requestDTO;
            const random = Math.floor((Math.random() * (999999 - 100000)) + 100000);
            const sendMail = this.mailerService.sendMail({
                to: email,
                from: Email.FORM,
                subject: Email.SUBJECT,
                html: `
                    <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                        <div style="margin:50px auto;width:70%;padding:20px 0">
                            <div style="border-bottom:1px solid #eee">
                            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">The Wonder Store</a>
                            </div>
                            <p style="font-size:1.1em">Hi,</p>
                            <p>Thank you for choosing The Wonder Store. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
                            <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${random}</h2>
                            <p style="font-size:0.9em;">Regards,<br />The Wonder Store</p>
                            <hr style="border:none;border-top:1px solid #eee" />
                            <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                            <p>Your Brand Inc</p>
                            <p>1600 Amphitheatre Parkway</p>
                            <p>California</p>
                            </div>
                        </div>
                </div>
                `,
            });
            if (sendMail) {
                return {
                    status: true,
                    message: 'SendMail successfully',
                    random,
                };
            }
            else {
                return {
                    status: false,
                    message: 'SendMail Failed',
                };
            }
        }
        catch (error) {
            return {
                status: false,
                message: error,
            };
        }
    }
    async UpdateInfoUser(requestDTO) {
        try {
            const { _id, email = null, username = null } = requestDTO;
            const user = await this.userModel.findOne({ _id: _id });
            if (user) {
                user.email = email ? email : user.email;
                user.username = username ? username : user.username;
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
    async GetEmailAllUsersInfor() {
        try {
            const listEmail = await this.userModel.find();
            return listEmail.map(user => user.email);
        }
        catch (error) {
            return error;
        }
    }
};
exports.UserInfoService = UserInfoService;
exports.UserInfoService = UserInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.UsersInfo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mailer_1.MailerService])
], UserInfoService);
//# sourceMappingURL=user.service.js.map