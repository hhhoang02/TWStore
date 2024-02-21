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
exports.BannerCpanelController = void 0;
const common_1 = require("@nestjs/common");
const banner_service_1 = require("./banner.service");
const platform_express_1 = require("@nestjs/platform-express");
const mongoose_1 = require("mongoose");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let BannerCpanelController = class BannerCpanelController {
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    async quanlysanpham(res) {
        try {
            const response = await this.bannerService.getAllBanner();
            return { banner: response.banner };
        }
        catch (error) {
        }
    }
    async AddBanner(res) {
        try {
            return {};
        }
        catch (error) {
            return error;
        }
    }
    async addBanner(body, files, res) {
        try {
            if (!files) {
                return null;
            }
            await this.bannerService.addBanner({ body, files });
            return res.redirect('/bannerCpanel/quanlybanner');
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteBanner(_id, res) {
        try {
            await this.bannerService.deleteBanner(_id);
            return res.json({ result: true });
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.BannerCpanelController = BannerCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlybanner'),
    (0, common_1.Render)('quanlybanner'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BannerCpanelController.prototype, "quanlysanpham", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('addBanner'),
    (0, common_1.Render)('addBanner'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BannerCpanelController.prototype, "AddBanner", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)('addBanner'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BannerCpanelController.prototype, "addBanner", null);
__decorate([
    (0, common_1.Delete)('deleteBanner/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], BannerCpanelController.prototype, "deleteBanner", null);
exports.BannerCpanelController = BannerCpanelController = __decorate([
    (0, common_1.Controller)('bannerCpanel'),
    __metadata("design:paramtypes", [banner_service_1.BannerService])
], BannerCpanelController);
//# sourceMappingURL=banner.cpanel.controller.js.map