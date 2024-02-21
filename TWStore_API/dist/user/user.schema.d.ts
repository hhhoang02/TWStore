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
export type UserDocument = Users & Document;
export declare class Address {
    position: number;
    city: string;
    district: string;
    ward: string;
    street: string;
}
export declare class ListProduct {
    key: string;
    productID: Product;
    sizeProduct: Size;
    colorProduct: Color;
    quantity: number;
}
export declare class Users {
    _idUser: Types.ObjectId;
    name: string;
    email: string;
    phone: string;
    active: boolean;
    avatar: string;
    cartItem: ListProduct[];
    gender: string;
    birthDay: string;
    address: Address[] | null;
}
export declare const UserSchema: mongoose.Schema<Users, mongoose.Model<Users, any, any, any, mongoose.Document<unknown, any, Users> & Users & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Users, mongoose.Document<unknown, {}, mongoose.FlatRecord<Users>> & mongoose.FlatRecord<Users> & {
    _id: Types.ObjectId;
}>;
