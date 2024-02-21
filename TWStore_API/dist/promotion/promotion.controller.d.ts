import { PromotionInsertDTO } from "./dto/promotion_insert_request";
import { PromotionService } from "./promotion.service";
import { Response } from "express";
import { PromotionDeleteRequestDTO } from "./dto/promotion_delete_request";
export declare class PromotionController {
    private readonly promotionService;
    constructor(promotionService: PromotionService);
    AddPromotion(body: PromotionInsertDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    GetAllPromotion(res: Response): Promise<Response<any, Record<string, any>>>;
    DeletePromotion(body: PromotionDeleteRequestDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    GetCouponHighest(res: Response): Promise<Response<any, Record<string, any>>>;
}
