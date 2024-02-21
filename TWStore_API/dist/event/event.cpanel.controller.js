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
exports.EventsCpanelController = void 0;
const common_1 = require("@nestjs/common");
const event_service_1 = require("./event.service");
const product_service_1 = require("../product/product.service");
const platform_express_1 = require("@nestjs/platform-express");
const mongoose_1 = require("mongoose");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let EventsCpanelController = class EventsCpanelController {
    constructor(eventService, productService) {
        this.eventService = eventService;
        this.productService = productService;
    }
    async quanlysukien(res) {
        try {
            const events = await this.eventService.getAllEvent();
            return { events };
        }
        catch (error) { }
    }
    async addEventCpanel(res) {
        try {
            const products = await this.productService.getAllProduct();
            return { products };
        }
        catch (error) { }
    }
    async addEvent(body, files, res) {
        try {
            if (!files) {
                return null;
            }
            await this.eventService.addEvent({ body, files });
            return res.redirect("/eventsCpanel/quanlysukien");
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteEvent(id, res) {
        try {
            await this.eventService.deleteEvent(id);
            return res.json({ result: true });
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.EventsCpanelController = EventsCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlysukien'),
    (0, common_1.Render)('quanlysukien'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsCpanelController.prototype, "quanlysukien", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('addEvent'),
    (0, common_1.Render)('addEvent'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsCpanelController.prototype, "addEventCpanel", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)('addEvent'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], EventsCpanelController.prototype, "addEvent", null);
__decorate([
    (0, common_1.Delete)('deleteEvent/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], EventsCpanelController.prototype, "deleteEvent", null);
exports.EventsCpanelController = EventsCpanelController = __decorate([
    (0, common_1.Controller)('eventsCpanel'),
    __metadata("design:paramtypes", [event_service_1.EventService,
        product_service_1.ProductService])
], EventsCpanelController);
//# sourceMappingURL=event.cpanel.controller.js.map