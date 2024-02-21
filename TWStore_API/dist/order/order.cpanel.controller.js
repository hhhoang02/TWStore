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
exports.OrderCpanelController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_getOrderbyID_request_1 = require("./dto/order_getOrderbyID_request");
const promotion_service_1 = require("../promotion/promotion.service");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let OrderCpanelController = class OrderCpanelController {
    constructor(orderService, promotionService) {
        this.orderService = orderService;
        this.promotionService = promotionService;
    }
    async quanlydonhang(res) {
        try {
            const ContentStatus = [
                {
                    key: 1, value: "Đặt hàng thành công",
                },
                {
                    key: 2, value: "Đã xác nhận đơn hàng"
                },
                {
                    key: 3, value: "Đã đóng gói đơn hàng"
                },
                {
                    key: 4, value: "Đã giao cho bên vận chuyển"
                },
                {
                    key: 5, value: "Giao hàng thành công"
                },
                {
                    key: 6, value: "Đơn hàng bị hủy"
                },
            ];
            const response = await this.orderService.getAllOrder();
            const orders = response.map((item) => {
                return {
                    order: item,
                    statusOrder: ContentStatus.find((status) => status.key == item.status)
                };
            });
            return { orders };
        }
        catch (error) { }
    }
    async orderDetail(_id, res) {
        try {
            const orders = await this.orderService.getOrderbyID(_id);
            return { orders, listProduct: orders.listProduct, discountLevel: orders.voucher };
        }
        catch (error) { }
    }
    async updateStatusOrder(id, body, res) {
        try {
            const order = await this.orderService.updateStatusOrder({ id, body });
            return res.json({ result: true, userID: order.userID, statusOrder: order.statusOrder });
        }
        catch (error) {
        }
    }
    async getYearRevenue(year) {
        return await this.orderService.getAnnualRevenue(year);
    }
    async getMonthlyRevenue() {
        const date = new Date();
        return await this.orderService.getMonthlyRevenue(date.getFullYear(), date.getMonth() + 1);
    }
    async top10ProductBestSaler() {
        return await this.orderService.top10ProductBestSaler();
    }
};
exports.OrderCpanelController = OrderCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlydonhang'),
    (0, common_1.Render)('quanlydonhang'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderCpanelController.prototype, "quanlydonhang", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('orderDetail/:_id'),
    (0, common_1.Render)('orderDetail'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_getOrderbyID_request_1.OrderGetbyIdDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderCpanelController.prototype, "orderDetail", null);
__decorate([
    (0, common_1.Put)('updateStatusOrder/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], OrderCpanelController.prototype, "updateStatusOrder", null);
__decorate([
    (0, common_1.Get)('/RevenueByYear/:year'),
    __param(0, (0, common_1.Param)('year')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderCpanelController.prototype, "getYearRevenue", null);
__decorate([
    (0, common_1.Get)('/RevenueByMonth'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderCpanelController.prototype, "getMonthlyRevenue", null);
__decorate([
    (0, common_1.Get)('/getTop10Product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderCpanelController.prototype, "top10ProductBestSaler", null);
exports.OrderCpanelController = OrderCpanelController = __decorate([
    (0, common_1.Controller)('ordersCpanel'),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        promotion_service_1.PromotionService])
], OrderCpanelController);
//# sourceMappingURL=order.cpanel.controller.js.map