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
import { PromotionDocument } from "./promotion.schema";
import { Model } from "mongoose";
import { PromotionInsertDTO } from "./dto/promotion_insert_request";
import { PromotionResponseDTO } from "./dto/promotion_response";
import { PromotionGetResponseDTO } from "./dto/promotion_get_response";
import { PromotionDeleteRequestDTO } from "./dto/promotion_delete_request";
export declare class PromotionService {
    private readonly promotionModel;
    constructor(promotionModel: Model<PromotionDocument>);
    addPromotion(requestDTO: PromotionInsertDTO): Promise<PromotionResponseDTO>;
    getAllPromotion(): Promise<PromotionGetResponseDTO[]>;
    getPromotionHighest(): Promise<PromotionGetResponseDTO>;
    DeletePromotion(requestDTO: PromotionDeleteRequestDTO): Promise<PromotionResponseDTO>;
}
