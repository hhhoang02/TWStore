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
exports.PromotionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const promotion_schema_1 = require("./promotion.schema");
const mongoose_2 = require("mongoose");
function randomPromotion() {
    const length = 6;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
let PromotionService = class PromotionService {
    constructor(promotionModel) {
        this.promotionModel = promotionModel;
    }
    async addPromotion(requestDTO) {
        try {
            const promotionCode = randomPromotion();
            const { titleVoucher, contentVoucher, discountLevel, startDay, endDay } = requestDTO;
            const currentDate = new Date();
            if (currentDate >= new Date(startDay) && currentDate <= new Date(endDay)) {
                const newPromotion = new this.promotionModel({
                    titleVoucher,
                    contentVoucher,
                    discountCode: promotionCode,
                    discountLevel,
                    startDay,
                    endDay
                });
                await newPromotion.save();
            }
            else {
                await this.promotionModel.deleteOne({ startDay, endDay });
                return {
                    status: false,
                    message: 'Promotion date range is not valid. Promotion deleted.',
                };
            }
            return {
                status: true,
                message: 'Add promotion successfully',
            };
        }
        catch (error) {
            console.error(error);
            return {
                status: false,
                message: 'Add promotion failed',
            };
        }
    }
    async getAllPromotion() {
        try {
            const response = await this.promotionModel.find();
            return response;
        }
        catch (error) {
            return;
        }
    }
    async getPromotionHighest() {
        try {
            const response = await this.promotionModel.find().sort([['discountLevel', 'desc']]).exec();
            return response[0];
        }
        catch (error) {
            return;
        }
    }
    async DeletePromotion(requestDTO) {
        try {
            const { _id } = requestDTO;
            const promotion = await this.promotionModel.findById(_id);
            if (!promotion)
                return {
                    status: false,
                    message: 'Promotion not found',
                };
            await this.promotionModel.findByIdAndDelete(_id);
            return {
                status: true,
                message: 'Delete promotion successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: 'Delete promotion failed',
            };
        }
    }
};
exports.PromotionService = PromotionService;
exports.PromotionService = PromotionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(promotion_schema_1.Promotion.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PromotionService);
//# sourceMappingURL=promotion.service.js.map