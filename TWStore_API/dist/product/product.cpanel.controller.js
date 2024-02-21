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
exports.ProductsCpanelController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const category_service_1 = require("../category/category.service");
const color_service_1 = require("../colorProduct/color.service");
const size_service_1 = require("../size/size.service");
const brand_service_1 = require("../brand/brand.service");
const product_getProductbyID_request_1 = require("./dto/product_getProductbyID_request");
const platform_express_1 = require("@nestjs/platform-express");
const product_update_request_1 = require("./dto/product_update_request");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let ProductsCpanelController = class ProductsCpanelController {
    constructor(productService, categoryService, colorService, sizeService, brandService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.colorService = colorService;
        this.sizeService = sizeService;
        this.brandService = brandService;
    }
    async addProductCpanel(res) {
        try {
            const categories = await this.categoryService.GetAllCategory();
            const colors = await this.colorService.GetAllColor();
            const sizes = await this.sizeService.GetAllSize();
            const brands = await this.brandService.GetAllBrand();
            return { categories, colors, sizes, brands };
        }
        catch (error) {
        }
    }
    async addProduct(body, files, res) {
        try {
            if (!files) {
                return null;
            }
            const product = await this.productService.addProduct({ body, files });
            return res.redirect('/productsCpanel/quanlysanpham');
        }
        catch (error) {
            console.log(error);
        }
    }
    async productDetail(_id, res) {
        try {
            let product = await this.productService.getProductById(_id);
            let categories = await this.categoryService.GetAllCategory();
            let colors = await this.colorService.GetAllColor();
            let sizes = await this.sizeService.GetAllSize();
            let brands = await this.brandService.GetAllBrand();
            brands = brands.map((item) => {
                item.selected = false;
                if (item._id.toString() == product.brand._id.toString()) {
                    item.selected = true;
                }
                return item;
            });
            colors = colors.map((item) => {
                item.selected = false;
                product.colorID.map((color) => {
                    if (item._id.toString() == color._id.toString()) {
                        item.selected = true;
                    }
                });
                return item;
            });
            categories = categories.map((item) => {
                item.selected = false;
                if (item._id.toString() == product.categoryID?._id?.toString()) {
                    item.selected = true;
                }
                return item;
            });
            sizes = sizes.map((item) => {
                item.selected = false;
                product.size.map((size) => {
                    if (item._id.toString() == size._id.toString()) {
                        item.selected = true;
                    }
                });
                return item;
            });
            return { product, categories, colors, sizes, brands, imageProduct: product.image };
        }
        catch (error) {
            console.log(error);
        }
    }
    async editProduct(_id, body, files, res) {
        try {
            const result = await this.productService.updateProduct({ _id, body, files });
            if (result) {
                return res.redirect('/productsCpanel/quanlysanpham');
            }
        }
        catch (error) { }
    }
    async deleteProduct(_id, res) {
        try {
            const result = await this.productService.deleteProduct(_id);
            return res.json({ result });
        }
        catch (error) {
            return res.json({ result: false });
        }
    }
    async quanlysanpham(request, res) {
        try {
            const products = await this.productService.getAllProduct();
            const productUpdate = products.map((item) => {
                const price = item.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                let parts = price.toString().split('.');
                return {
                    products: item,
                    price: parts[0]
                };
            });
            return { productUpdate };
        }
        catch (error) {
        }
    }
};
exports.ProductsCpanelController = ProductsCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('addProduct'),
    (0, common_1.Render)('addProduct'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsCpanelController.prototype, "addProductCpanel", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'image', maxCount: 10 },
    ])),
    (0, common_1.Post)('addProduct'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsCpanelController.prototype, "addProduct", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('productDetail/:_id/edit'),
    (0, common_1.Render)('productDetail'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_getProductbyID_request_1.ProductGetbyIdDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductsCpanelController.prototype, "productDetail", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'image', maxCount: 10 },
    ])),
    (0, common_1.Post)('productDetail/:_id/edit'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_getProductbyID_request_1.ProductGetbyIdDTO, product_update_request_1.ProductUpdateDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsCpanelController.prototype, "editProduct", null);
__decorate([
    (0, common_1.Delete)('productDetail/:_id/delete'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_update_request_1.ProductUpdateDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductsCpanelController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlysanpham'),
    (0, common_1.Render)('quanlysanpham'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsCpanelController.prototype, "quanlysanpham", null);
exports.ProductsCpanelController = ProductsCpanelController = __decorate([
    (0, common_1.Controller)('productsCpanel'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        category_service_1.CategoryService,
        color_service_1.ColorService,
        size_service_1.SizeService,
        brand_service_1.BrandService])
], ProductsCpanelController);
//# sourceMappingURL=product.cpanel.controller.js.map