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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_getProductbyID_request_1 = require("./dto/product_getProductbyID_request");
const product_getProductbyIdCategory_request_1 = require("./dto/product_getProductbyIdCategory_request");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async GetAllProduct(res) {
        try {
            const product = await this.productService.getAllProduct();
            return res.status(common_1.HttpStatus.OK).json(product);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async GetProductById(_id, res) {
        try {
            const product = await this.productService.getProductById(_id);
            return res.status(common_1.HttpStatus.OK).json(product);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async GetProductByIdCategory(_id, res) {
        try {
            const product = await this.productService.getProductbyIdCategory(_id);
            return res.status(common_1.HttpStatus.OK).json(product);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async GetProductByIdBrand(params, res) {
        try {
            const product = await this.productService.getProductbyIdBrand(params);
            return res.status(common_1.HttpStatus.OK).json(product);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async updateQuantityProduct(_id, body, res) {
        try {
            const product = await this.productService.updateProduct({ _id, body });
            return res.status(common_1.HttpStatus.OK).json(product);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
    async getRecommendProduct(res) {
        try {
            const product = await this.productService.getRecommendProduct();
            return res.status(common_1.HttpStatus.OK).json(product);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)('getAllProduct'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "GetAllProduct", null);
__decorate([
    (0, common_1.Get)('getProductById/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_getProductbyID_request_1.ProductGetbyIdDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "GetProductById", null);
__decorate([
    (0, common_1.Get)('getProductByIdCategory/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_getProductbyIdCategory_request_1.ProductGetByIdCategoryRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "GetProductByIdCategory", null);
__decorate([
    (0, common_1.Get)('getProductByIdBrand/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "GetProductByIdBrand", null);
__decorate([
    (0, common_1.Put)('updateQuantityProduct/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateQuantityProduct", null);
__decorate([
    (0, common_1.Get)('getRecommendProduct'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getRecommendProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map