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
exports.PromotionCpanelController = void 0;
const common_1 = require("@nestjs/common");
const promotion_service_1 = require("./promotion.service");
const promotion_delete_request_1 = require("./dto/promotion_delete_request");
const promotion_insert_request_1 = require("./dto/promotion_insert_request");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let PromotionCpanelController = class PromotionCpanelController {
    constructor(promotionService) {
        this.promotionService = promotionService;
    }
    async quanlymagiamgia(res) {
        try {
            const promotions = await this.promotionService.getAllPromotion();
            const newPromotions = promotions.map((promotion) => {
                const dateStart = new Date(promotion.startDay);
                const dateEnd = new Date(promotion.endDay);
                return {
                    promotion: promotion,
                    start: ` ${dateStart.getDate()} / ${dateStart.getMonth() + 1} / ${dateStart.getFullYear()}`,
                    end: ` ${dateEnd.getDate()} / ${dateEnd.getMonth() + 1} / ${dateEnd.getFullYear()}`,
                };
            });
            return { newPromotions };
        }
        catch (error) { }
    }
    async AddPromotion(res) {
        try {
            return {};
        }
        catch (error) {
            return error;
        }
    }
    async addPromotion(body, res) {
        try {
            await this.promotionService.addPromotion(body);
            return res.redirect('/promotionsCpanel/quanlymagiamgia');
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletePromotion(_id, res) {
        try {
            await this.promotionService.DeletePromotion(_id);
            return res.json({ result: true });
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.PromotionCpanelController = PromotionCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlymagiamgia'),
    (0, common_1.Render)('quanlymagiamgia'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotionCpanelController.prototype, "quanlymagiamgia", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('addPromotion'),
    (0, common_1.Render)('addPromotion'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PromotionCpanelController.prototype, "AddPromotion", null);
__decorate([
    (0, common_1.Post)('addPromotion'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [promotion_insert_request_1.PromotionInsertDTO, Object]),
    __metadata("design:returntype", Promise)
], PromotionCpanelController.prototype, "addPromotion", null);
__decorate([
    (0, common_1.Delete)('quanlymagiamgia/:_id/delete'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [promotion_delete_request_1.PromotionDeleteRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], PromotionCpanelController.prototype, "deletePromotion", null);
exports.PromotionCpanelController = PromotionCpanelController = __decorate([
    (0, common_1.Controller)('promotionsCpanel'),
    __metadata("design:paramtypes", [promotion_service_1.PromotionService])
], PromotionCpanelController);
//# sourceMappingURL=promotion.cpanel.controller.js.map