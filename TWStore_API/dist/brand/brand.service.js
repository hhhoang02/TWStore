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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const brand_schema_1 = require("./brand.schema");
const mongoose_2 = require("mongoose");
let BrandService = class BrandService {
    constructor(brandModel) {
        this.brandModel = brandModel;
    }
    async AddBrand(requestDTO) {
        try {
            const { name, linkIcon } = requestDTO;
            const Brand = await this.brandModel.findOne({ name });
            if (Brand) {
                return {
                    status: false,
                    message: 'Brand already exists',
                };
            }
            const newBrand = new this.brandModel({ name, linkIcon });
            await newBrand.save();
            return {
                status: true,
                message: 'Add Brand successfully',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Add Brand failed',
            };
        }
    }
    async GetAllBrand() {
        try {
            const responseDTO = await this.brandModel.find();
            return responseDTO;
        }
        catch (error) {
            return error;
        }
    }
    async DeleteBrand(requestDTO) {
        try {
            const { _id } = requestDTO;
            const Brand = await this.brandModel.findById(_id);
            if (!Brand)
                return {
                    status: false,
                    message: 'Brand not found',
                };
            await this.brandModel.findByIdAndDelete(_id);
            return {
                status: true,
                message: 'Delete Brand successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: 'Delete Brand failed',
            };
        }
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(brand_schema_1.Brand.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BrandService);
//# sourceMappingURL=brand.service.js.map