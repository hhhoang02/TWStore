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
exports.ProductService = void 0;
const mongoose_1 = require("mongoose");
const product_schema_1 = require("./product.schema");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const upload_1 = require("../upload/upload");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async addProduct(requestDTO) {
        try {
            const body = requestDTO.body;
            const files = requestDTO.files.image;
            let data = [];
            for (var i = 0; i < files.length; i++) {
                const url = await (0, upload_1.default)(files[i], "Sneaker");
                data.push(url);
            }
            const { productName, price, quantity, description, offer, brand, size, categoryID, colorID } = body;
            const newProduct = new this.productModel({
                image: data, productName, price, quantity, description, offer, brand, size, categoryID, colorID
            });
            await newProduct.save();
            return {
                status: true,
                message: 'Add product successfully',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Add product failed',
            };
        }
    }
    async updateProduct(requestDTO) {
        try {
            const _id = requestDTO._id;
            const body = requestDTO.body;
            const files = requestDTO.files?.image;
            let data = [];
            if (files) {
                for (var i = 0; i < files.length; i++) {
                    const url = await (0, upload_1.default)(files[i], "Sneaker");
                    data.push(url);
                }
            }
            const { image = data, productName, price, quantity, description, offer, brand, size, categoryID, colorID, quantityOfOrder } = body;
            const product = await this.productModel.findById(_id);
            if (!product) {
                return {
                    status: false,
                    message: 'Product not found',
                };
            }
            product.image = image.length > 0 ? image : product.image;
            product.productName = productName ? productName : product.productName;
            product.price = price ? price : product.price;
            if (product.quantity - quantityOfOrder > 0) {
                product.quantity = quantity ? quantity : quantityOfOrder ? product.quantity - quantityOfOrder : product.quantity;
            }
            product.description = description ? description : product.description;
            product.offer = offer ? offer : product.offer;
            product.brand = brand ? brand : product.brand;
            product.size = size ? size : product.size;
            product.categoryID = categoryID ? categoryID : product.categoryID;
            product.colorID = colorID ? colorID : product.colorID;
            await product.save();
            return {
                status: true,
                message: 'Update product successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: 'Update product failed',
            };
        }
    }
    async deleteProduct(requestDTO) {
        try {
            const { _id } = requestDTO;
            const product = await this.productModel.findByIdAndDelete(_id);
            if (!product)
                return {
                    status: false,
                    message: 'Product not found',
                };
            return {
                status: true,
                message: 'Delete product successfully',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Delete product failed',
            };
        }
    }
    async getAllProduct() {
        try {
            const product = await this.productModel.find().populate([{ path: 'brand', select: 'name' }, { path: 'size', select: 'name' }, { path: 'categoryID', select: 'name' }, { path: 'colorID', select: 'code' }]);
            ;
            return product;
        }
        catch (error) {
            return;
        }
    }
    async getRecommendProduct() {
        try {
            const product = await this.productModel.find();
            return product.filter(item => item.price <= 1500000);
        }
        catch (error) {
            return;
        }
    }
    async getProductById(requestDTO) {
        try {
            const _id = requestDTO;
            const product = await this.productModel.findById(_id).populate([{ path: 'brand', select: 'name' }, { path: 'size', select: 'name' }, { path: 'categoryID', select: 'name' }, { path: 'colorID', select: 'code' }]);
            ;
            if (product) {
                return product;
            }
            {
                return product;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async getProductbyIdCategory(requestDTO) {
        try {
            const { _id } = requestDTO;
            const product = await this.productModel.find({ categoryID: _id }).populate([{ path: "brand", select: 'name' }, { path: "size", select: 'name' }, { path: "colorID" },]);
            return product;
        }
        catch (error) {
            return;
        }
    }
    async getProductbyIdBrand(requestDTO) {
        try {
            const { _id } = requestDTO;
            const product = await this.productModel.find({ brand: _id });
            return product.slice(0, 5);
        }
        catch (error) {
            return;
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductService);
//# sourceMappingURL=product.service.js.map