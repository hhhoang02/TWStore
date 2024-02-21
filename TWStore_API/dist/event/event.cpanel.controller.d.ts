/// <reference types="multer" />
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
import { Response } from 'express';
import { EventService } from './event.service';
import { ProductService } from 'src/product/product.service';
import { Types } from 'mongoose';
export declare class EventsCpanelController {
    private readonly eventService;
    private readonly productService;
    constructor(eventService: EventService, productService: ProductService);
    quanlysukien(res: Response): Promise<{
        events: any;
    }>;
    addEventCpanel(res: Response): Promise<{
        products: import("../product/dto/product_get_response").ProductGetResponseDTO[];
    }>;
    addEvent(body: any, files: Express.Multer.File, res: Response): Promise<void>;
    deleteEvent(id: Types.ObjectId, res: Response): Promise<Response<any, Record<string, any>>>;
}
