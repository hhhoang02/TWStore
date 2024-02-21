/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose, { Document, Types } from "mongoose";
import { Color } from "src/colorProduct/color.schema";
import { Product } from "src/product/product.schema";
import { Size } from "src/size/size.schema";
import { Users } from "src/user/user.schema";
export type OrderDocument = Order & Document;
export declare class PaymentDetail {
    paymentMethods: string;
    status: number;
}
export declare class listProduct {
    productID: Product;
    quantityProduct: number;
    colorID: Color;
    sizeID: Size;
}
export declare class Order {
    orderCode: string;
    status: number;
    listProduct: listProduct[];
    bookingDate: Date;
    deliveryDate: string;
    userID: Users;
    voucher: string;
    phoneReceiver: string;
    nameReceiver: string;
    addressDelivery: string;
    payment: PaymentDetail | null;
    totalPrice: number;
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, mongoose.Document<unknown, any, Order> & Order & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, mongoose.Document<unknown, {}, mongoose.FlatRecord<Order>> & mongoose.FlatRecord<Order> & {
    _id: Types.ObjectId;
}>;
