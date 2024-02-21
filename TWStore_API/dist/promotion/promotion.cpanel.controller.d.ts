import { PromotionService } from './promotion.service';
import { Response } from 'express';
import { PromotionDeleteRequestDTO } from './dto/promotion_delete_request';
import { PromotionInsertDTO } from './dto/promotion_insert_request';
export declare class PromotionCpanelController {
    private readonly promotionService;
    constructor(promotionService: PromotionService);
    quanlymagiamgia(res: Response): Promise<{
        newPromotions: {
            promotion: import("./dto/promotion_get_response").PromotionGetResponseDTO;
            start: string;
            end: string;
        }[];
    }>;
    AddPromotion(res: Response): Promise<any>;
    addPromotion(body: PromotionInsertDTO, res: Response): Promise<void>;
    deletePromotion(_id: PromotionDeleteRequestDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
