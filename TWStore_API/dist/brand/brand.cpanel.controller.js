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
exports.BrandsCpanelController = void 0;
const common_1 = require("@nestjs/common");
const brand_service_1 = require("./brand.service");
const brand_delete_request_1 = require("./dto/brand_delete_request");
const brand_add_request_1 = require("./dto/brand_add_request");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let BrandsCpanelController = class BrandsCpanelController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    async AddBrand(res) {
        try {
            return {};
        }
        catch (error) {
            return error;
        }
    }
    async addBrand(requestDTO, body, res) {
        try {
            await this.brandService.AddBrand(body);
            return res.redirect('/brandsCpanel/quanlythuonghieu');
        }
        catch (error) {
            console.log(error);
        }
    }
    async quanlythuonghieu(res) {
        try {
            const brands = await this.brandService.GetAllBrand();
            return { brands };
        }
        catch (error) {
        }
    }
    async deleteBrand(_id, res) {
        try {
            const result = await this.brandService.DeleteBrand(_id);
            return res.json({ result });
        }
        catch (error) {
            return res.json({ result: false });
        }
    }
};
exports.BrandsCpanelController = BrandsCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('addBrand'),
    (0, common_1.Render)('addBrand'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandsCpanelController.prototype, "AddBrand", null);
__decorate([
    (0, common_1.Post)('addBrand'),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_add_request_1.BrandAddRequestDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], BrandsCpanelController.prototype, "addBrand", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlythuonghieu'),
    (0, common_1.Render)('quanlythuonghieu'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BrandsCpanelController.prototype, "quanlythuonghieu", null);
__decorate([
    (0, common_1.Delete)('quanlythuonghieu/:_id/delete'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [brand_delete_request_1.BrandDeleteRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], BrandsCpanelController.prototype, "deleteBrand", null);
exports.BrandsCpanelController = BrandsCpanelController = __decorate([
    (0, common_1.Controller)('brandsCpanel'),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandsCpanelController);
//# sourceMappingURL=brand.cpanel.controller.js.map