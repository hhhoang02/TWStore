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
exports.SizesCpanelController = void 0;
const common_1 = require("@nestjs/common");
const size_service_1 = require("./size.service");
const size_delete_request_1 = require("./dto/size_delete_request");
const size_add_request_1 = require("./dto/size_add_request");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let SizesCpanelController = class SizesCpanelController {
    constructor(sizeService) {
        this.sizeService = sizeService;
    }
    async quanlykichco(res) {
        try {
            const sizes = await this.sizeService.GetAllSize();
            return { sizes };
        }
        catch (error) {
        }
    }
    async AddSizeRender(res) {
        try {
            const sizes = await this.sizeService.GetAllSize();
            return { sizes };
        }
        catch (error) {
        }
    }
    async AddSize(body, res) {
        try {
            const responseDTO = await this.sizeService.AddSize(body);
            return res.redirect('/sizesCpanel/quanlykichco');
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async DeleteSize(id, res) {
        try {
            const responseDTO = await this.sizeService.DeleteSize(id);
            return res.json({ result: true });
        }
        catch (error) {
            return res.json({ result: false });
        }
    }
};
exports.SizesCpanelController = SizesCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlykichco'),
    (0, common_1.Render)('quanlykichco'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SizesCpanelController.prototype, "quanlykichco", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('addSize'),
    (0, common_1.Render)('addSize'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SizesCpanelController.prototype, "AddSizeRender", null);
__decorate([
    (0, common_1.Post)('addSize'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [size_add_request_1.SizeAddRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], SizesCpanelController.prototype, "AddSize", null);
__decorate([
    (0, common_1.Delete)('deleteSize/:id/delete'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [size_delete_request_1.SizeDeleteRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], SizesCpanelController.prototype, "DeleteSize", null);
exports.SizesCpanelController = SizesCpanelController = __decorate([
    (0, common_1.Controller)('sizesCpanel'),
    __metadata("design:paramtypes", [size_service_1.SizeService])
], SizesCpanelController);
//# sourceMappingURL=size.cpanel.controller.js.map