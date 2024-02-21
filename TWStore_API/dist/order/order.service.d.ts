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
import { OrderDocument } from './order.schema';
import { Model } from 'mongoose';
import { OrderInsertDTO } from './dto/order_insert_request';
import { OrderResponseDTO } from './dto/order_response';
import { OrderGetResponseDTO } from './dto/order_get_response';
import { OrderGetbyIdDTO } from './dto/order_getOrderbyID_request';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<OrderDocument>);
    addOrder(requestDTO: OrderInsertDTO): Promise<OrderResponseDTO>;
    getAllOrder(): Promise<OrderResponseDTO | any>;
    getOrderbyID(requestDTO: OrderGetbyIdDTO): Promise<OrderGetResponseDTO>;
    getOrderbyIDUser(requestDTO: OrderGetbyIdDTO): Promise<OrderGetResponseDTO[]>;
    updateStatusOrder(requestDTO: {
        id: string;
        body: any;
    }): Promise<OrderResponseDTO | any>;
    getOrderByIdUser(requestDTO: any): Promise<OrderGetResponseDTO[]>;
    getMonthlyRevenue(year: number, month: number): Promise<number>;
    getAnnualRevenue(year: number): Promise<number[]>;
    top10ProductBestSaler(): Promise<[]>;
}
