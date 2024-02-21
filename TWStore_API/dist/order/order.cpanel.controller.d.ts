import { OrderService } from './order.service';
import { Response } from 'express';
import { OrderGetbyIdDTO } from './dto/order_getOrderbyID_request';
import { PromotionService } from 'src/promotion/promotion.service';
export declare class OrderCpanelController {
    private readonly orderService;
    private readonly promotionService;
    constructor(orderService: OrderService, promotionService: PromotionService);
    quanlydonhang(res: Response): Promise<{
        orders: any;
    }>;
    orderDetail(_id: OrderGetbyIdDTO, res: Response): Promise<{
        orders: import("./dto/order_get_response").OrderGetResponseDTO;
        listProduct: import("./order.schema").listProduct[];
        discountLevel: string;
    }>;
    updateStatusOrder(id: string, body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    getYearRevenue(year: number): Promise<number[]>;
    getMonthlyRevenue(): Promise<number>;
    top10ProductBestSaler(): Promise<[]>;
}
