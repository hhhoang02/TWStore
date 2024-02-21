import { OrderService } from "./order.service";
import { OrderInsertDTO } from "./dto/order_insert_request";
import { Response } from "express";
import { OrderGetbyIdDTO } from "./dto/order_getOrderbyID_request";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    AddOrder(body: OrderInsertDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    GetAllOrder(res: Response): Promise<Response<any, Record<string, any>>>;
    GetOrderByID(_id: OrderGetbyIdDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    GetOrderByIdUser(_id: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
