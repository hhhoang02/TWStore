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
exports.PromotionController = void 0;
const common_1 = require("@nestjs/common");
const promotion_insert_request_1 = require("./dto/promotion_insert_request");
const promotion_service_1 = require("./promotion.service");
const promotion_delete_request_1 = require("./dto/promotion_delete_request");
let PromotionController = class PromotionController {
    constructor(promotionService) {
        this.promotionService = promotionService;
    }
    async AddPromotion(body, res) {
        try {
            const response = await this.promotionService.addPromotion(body);
            return res.status(common_1.HttpStatus.OK).json(response);
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async GetAllPromotion(res) {
        try {
            const response = await this.promotionService.getAllPromotion();
            return res.status(common_1.HttpStatus.OK).json(response);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async DeletePromotion(body, res) {
        try {
            const responseDTO = await this.promotionService.DeletePromotion(body);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async GetCouponHighest(res) {
        try {
            const response = await this.promotionService.getPromotionHighest();
            return res.status(common_1.HttpStatus.OK).json(response);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
};
exports.PromotionController = PromotionController;
__decorate([
    (0, common_1.Post)('addPromotion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [promotion_insert_request_1.PromotionInsertDTO, Object]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "AddPromotion", null);
__decorate([
    (0, common_1.Get)('getAllPromotion'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "GetAllPromotion", null);
__decorate([
    (0, common_1.Post)('deletePromotion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [promotion_delete_request_1.PromotionDeleteRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "DeletePromotion", null);
__decorate([
    (0, common_1.Get)('getCouponHighest'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotionController.prototype, "GetCouponHighest", null);
exports.PromotionController = PromotionController = __decorate([
    (0, common_1.Controller)('promotion'),
    __metadata("design:paramtypes", [promotion_service_1.PromotionService])
], PromotionController);
//# sourceMappingURL=promotion.controller.js.map