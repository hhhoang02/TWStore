"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_controller_1 = require("./user.controller");
const user_schema_1 = require("./user.schema");
const mailer_1 = require("@nestjs-modules/mailer");
const user_service_1 = require("./user.service");
var MailAdmin;
(function (MailAdmin) {
    MailAdmin["EMAIL"] = "thewondershopfashion@gmail.com";
    MailAdmin["PASSWORD"] = "myfcfurdamtnujqg";
    MailAdmin["HOST"] = "smtp.gmail.com";
})(MailAdmin || (MailAdmin = {}));
let UserInfoModule = class UserInfoModule {
};
exports.UserInfoModule = UserInfoModule;
exports.UserInfoModule = UserInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_schema_1.UsersInfo.name, schema: user_schema_1.UserInfoSchema },
            ]),
            mailer_1.MailerModule.forRootAsync({
                useFactory: () => ({
                    transport: {
                        service: 'gmail',
                        host: MailAdmin.HOST,
                        auth: {
                            user: MailAdmin.EMAIL,
                            pass: MailAdmin.PASSWORD
                        }
                    }
                })
            }),
        ],
        controllers: [user_controller_1.UserInfoController],
        providers: [user_service_1.UserInfoService],
        exports: [user_service_1.UserInfoService]
    })
], UserInfoModule);
//# sourceMappingURL=user.module.js.map