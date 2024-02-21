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
exports.ColorsCpanelController = void 0;
const common_1 = require("@nestjs/common");
const color_service_1 = require("./color.service");
const color_add_request_1 = require("./dto/color_add_request");
const mongoose_1 = require("mongoose");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let ColorsCpanelController = class ColorsCpanelController {
    constructor(colorService) {
        this.colorService = colorService;
    }
    async quanlyhang(res) {
        try {
            const colors = await this.colorService.GetAllColor();
            return { colors };
        }
        catch (error) {
        }
    }
    async DeleteColor(id, res) {
        try {
            const responseDTO = await this.colorService.DeleteColor(id);
            return res.json({ result: true });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async AddColorRender(res) {
        try {
            const colors = await this.colorService.GetAllColor();
            return { colors };
        }
        catch (error) {
        }
    }
    async AddColor(body, res) {
        try {
            const responseDTO = await this.colorService.AddColor(body);
            return res.redirect('/colorsCpanel/quanlymau');
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
};
exports.ColorsCpanelController = ColorsCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlymau'),
    (0, common_1.Render)('quanlymau'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ColorsCpanelController.prototype, "quanlyhang", null);
__decorate([
    (0, common_1.Delete)('deleteColor/:id/delete'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], ColorsCpanelController.prototype, "DeleteColor", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('addColor'),
    (0, common_1.Render)('addColor'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ColorsCpanelController.prototype, "AddColorRender", null);
__decorate([
    (0, common_1.Post)('addColor'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [color_add_request_1.ColorAddRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], ColorsCpanelController.prototype, "AddColor", null);
exports.ColorsCpanelController = ColorsCpanelController = __decorate([
    (0, common_1.Controller)('colorsCpanel'),
    __metadata("design:paramtypes", [color_service_1.ColorService])
], ColorsCpanelController);
//# sourceMappingURL=color.cpanel.controller.js.map