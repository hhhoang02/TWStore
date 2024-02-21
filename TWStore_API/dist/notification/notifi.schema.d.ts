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
import Document, { Types } from "mongoose";
export type NotificationDocument = Notification & Document;
export declare class Notification {
    _idUser: string;
    title: string;
    content: string;
}
export declare const NotificationSchema: Document.Schema<Notification, Document.Model<Notification, any, any, any, Document.Document<unknown, any, Notification> & Notification & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, Document.DefaultSchemaOptions, Notification, Document.Document<unknown, {}, Document.FlatRecord<Notification>> & Document.FlatRecord<Notification> & {
    _id: Types.ObjectId;
}>;
