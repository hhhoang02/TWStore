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
import { ColorService } from "./color.service";
import { Response } from 'express';
import { ColorAddRequestDTO } from "./dto/color_add_request";
import { Types } from "mongoose";
export declare class ColorsCpanelController {
    private readonly colorService;
    constructor(colorService: ColorService);
    quanlyhang(res: Response): Promise<{
        colors: import("./dto/color_getAll_response").ColorGetAllResponseDTO[];
    }>;
    DeleteColor(id: Types.ObjectId, res: Response): Promise<Response<any, Record<string, any>>>;
    AddColorRender(res: Response): Promise<{
        colors: import("./dto/color_getAll_response").ColorGetAllResponseDTO[];
    }>;
    AddColor(body: ColorAddRequestDTO, res: Response): Promise<void | Response<any, Record<string, any>>>;
}
