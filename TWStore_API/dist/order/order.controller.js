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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const order_insert_request_1 = require("./dto/order_insert_request");
const order_getOrderbyID_request_1 = require("./dto/order_getOrderbyID_request");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async AddOrder(body, res) {
        try {
            const order = await this.orderService.addOrder(body);
            return res.status(common_1.HttpStatus.OK).json(order);
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async GetAllOrder(res) {
        try {
            const responseDTO = await this.orderService.getAllOrder();
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async GetOrderByID(_id, res) {
        try {
            const responseDTO = await this.orderService.getOrderbyID(_id);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async GetOrderByIdUser(_id, res) {
        try {
            const responseDTO = await this.orderService.getOrderByIdUser(_id);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)('addOrder'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_insert_request_1.OrderInsertDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "AddOrder", null);
__decorate([
    (0, common_1.Get)('getAllOrder'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "GetAllOrder", null);
__decorate([
    (0, common_1.Get)('getOrderByID/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_getOrderbyID_request_1.OrderGetbyIdDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "GetOrderByID", null);
__decorate([
    (0, common_1.Get)('getOrderByIdUser/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "GetOrderByIdUser", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map