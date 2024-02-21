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
exports.OrderSchema = exports.Order = exports.listProduct = exports.PaymentDetail = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const color_schema_1 = require("../colorProduct/color.schema");
const product_schema_1 = require("../product/product.schema");
const size_schema_1 = require("../size/size.schema");
const user_schema_1 = require("../user/user.schema");
class PaymentDetail {
}
exports.PaymentDetail = PaymentDetail;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PaymentDetail.prototype, "paymentMethods", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], PaymentDetail.prototype, "status", void 0);
class listProduct {
}
exports.listProduct = listProduct;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Product' }),
    __metadata("design:type", product_schema_1.Product)
], listProduct.prototype, "productID", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], listProduct.prototype, "quantityProduct", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Color' }),
    __metadata("design:type", color_schema_1.Color)
], listProduct.prototype, "colorID", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Size' }),
    __metadata("design:type", size_schema_1.Size)
], listProduct.prototype, "sizeID", void 0);
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "orderCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 1 }),
    __metadata("design:type", Number)
], Order.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Order.prototype, "listProduct", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Order.prototype, "bookingDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "deliveryDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Users' }),
    __metadata("design:type", user_schema_1.Users)
], Order.prototype, "userID", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "voucher", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "phoneReceiver", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "nameReceiver", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Order.prototype, "addressDelivery", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", PaymentDetail)
], Order.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)()
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.schema.js.map