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
exports.PaymentService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const payment_schema_1 = require("./payment.schema");
let PaymentService = class PaymentService {
    constructor(paymentModel) {
        this.paymentModel = paymentModel;
    }
    async addPaymentMethod(requestDTO) {
        try {
            const { name, linkIcon } = requestDTO;
            const payment = new this.paymentModel({ name, linkIcon });
            await payment.save();
            return {
                status: true,
                message: 'Insert banner success' + payment,
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Update address failed',
            };
        }
    }
    async getAllPaymentMethod() {
        try {
            const payment = await this.paymentModel.find();
            return {
                status: true,
                message: 'Get all paymentMethod success',
                data: payment
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Get all paymentMethod failed',
            };
        }
    }
    async deletePaymentMethod(id) {
        try {
            await this.paymentModel.findByIdAndDelete(id);
            return {
                status: true,
                message: 'Delete payment success',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Delete payment failed',
            };
        }
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(payment_schema_1.Payment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PaymentService);
//# sourceMappingURL=payment.service.js.map