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
exports.UserCpanelController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const mongoose_1 = require("mongoose");
const authWeb_guard_1 = require("../auth/authWeb.guard");
const order_service_1 = require("../order/order.service");
let UserCpanelController = class UserCpanelController {
    constructor(userService, orderService) {
        this.userService = userService;
        this.orderService = orderService;
    }
    async quanlytaikhoan(res) {
        try {
            const users = await this.userService.GetAllUsers();
            return { users };
        }
        catch (error) { }
    }
    async blockAccount(id, body, res) {
        try {
            const { active } = body;
            const users = await this.userService.UpdateActiveUser({ _id: id, active: active });
            return res.json({ result: true });
        }
        catch (error) { }
    }
    async index(res) {
        const list = await this.orderService.top10ProductBestSaler();
        return {
            list
        };
    }
    logout(req, res) {
        req.logout();
        res.redirect('/auth/loginWeb');
    }
};
exports.UserCpanelController = UserCpanelController;
__decorate([
    (0, common_1.Get)('quanlytaikhoan'),
    (0, common_1.Render)('quanlytaikhoan'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCpanelController.prototype, "quanlytaikhoan", null);
__decorate([
    (0, common_1.Put)('setActive/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object, Object]),
    __metadata("design:returntype", Promise)
], UserCpanelController.prototype, "blockAccount", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('index'),
    (0, common_1.Render)('index'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserCpanelController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserCpanelController.prototype, "logout", null);
exports.UserCpanelController = UserCpanelController = __decorate([
    (0, common_1.Controller)('usersCpanel'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        order_service_1.OrderService])
], UserCpanelController);
//# sourceMappingURL=user.cpanel.controller.js.map