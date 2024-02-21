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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.Users = exports.ListProduct = exports.Address = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const color_schema_1 = require("../colorProduct/color.schema");
const product_schema_1 = require("../product/product.schema");
const size_schema_1 = require("../size/size.schema");
class Address {
}
exports.Address = Address;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Address.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "district", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "ward", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
class ListProduct {
}
exports.ListProduct = ListProduct;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ListProduct.prototype, "key", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Product' }),
    __metadata("design:type", product_schema_1.Product)
], ListProduct.prototype, "productID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Size' }),
    __metadata("design:type", size_schema_1.Size)
], ListProduct.prototype, "sizeProduct", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Color' }),
    __metadata("design:type", color_schema_1.Color)
], ListProduct.prototype, "colorProduct", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], ListProduct.prototype, "quantity", void 0);
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Users.prototype, "_idUser", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Users.prototype, "active", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Users.prototype, "cartItem", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Users.prototype, "birthDay", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Users.prototype, "address", void 0);
exports.Users = Users = __decorate([
    (0, mongoose_1.Schema)()
], Users);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(Users);
//# sourceMappingURL=user.schema.js.map