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
exports.PaymentCpanelController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const payment_service_1 = require("./payment.service");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let PaymentCpanelController = class PaymentCpanelController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async quanlyPaymentMethod(res) {
        try {
            const payment = await this.paymentService.getAllPaymentMethod();
            return { payment: payment.data };
        }
        catch (error) {
        }
    }
    async AddPaymentRender(res) {
        try {
            return {};
        }
        catch (error) {
            return error;
        }
    }
    async addPaymentMethod(body, res) {
        try {
            await this.paymentService.addPaymentMethod(body);
            return res.redirect('/paymentCpanel/quanlythanhtoan');
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletePayment(_id, res) {
        try {
            const { id } = _id;
            await this.paymentService.deletePaymentMethod(id);
            return res.json({ result: true });
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.PaymentCpanelController = PaymentCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlythanhtoan'),
    (0, common_1.Render)('quanlythanhtoan'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentCpanelController.prototype, "quanlyPaymentMethod", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('addPaymentMethod'),
    (0, common_1.Render)('addPaymentMethod'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentCpanelController.prototype, "AddPaymentRender", null);
__decorate([
    (0, common_1.Post)('addPaymentMethod'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentCpanelController.prototype, "addPaymentMethod", null);
__decorate([
    (0, common_1.Delete)('deletePayment/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], PaymentCpanelController.prototype, "deletePayment", null);
exports.PaymentCpanelController = PaymentCpanelController = __decorate([
    (0, common_1.Controller)('paymentCpanel'),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentCpanelController);
//# sourceMappingURL=payment.cpanel.controller.js.map