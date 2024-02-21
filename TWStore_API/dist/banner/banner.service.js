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
exports.BannerService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const banner_schema_1 = require("./banner.schema");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const upload_1 = require("../upload/upload");
let BannerService = class BannerService {
    constructor(bannerModel) {
        this.bannerModel = bannerModel;
    }
    async addBanner(requestDTO) {
        try {
            const body = requestDTO.body;
            const files = requestDTO.files;
            const url = await (0, upload_1.default)(files, "Banner");
            const { title } = body;
            const banner = new this.bannerModel({ title, image: url });
            await banner.save();
            return {
                status: true,
                message: 'Insert banner success' + banner,
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Update address failed',
            };
        }
    }
    async getAllBanner() {
        try {
            const banner = await this.bannerModel.find();
            return {
                status: true,
                message: 'Get all banner success',
                banner
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Get all banner failed',
            };
        }
    }
    async deleteBanner(id) {
        try {
            const { _id } = id;
            await this.bannerModel.findByIdAndDelete(_id);
            return {
                status: true,
                message: 'Delete banner success',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Delete banner failed',
            };
        }
    }
};
exports.BannerService = BannerService;
exports.BannerService = BannerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(banner_schema_1.Banner.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BannerService);
//# sourceMappingURL=banner.service.js.map