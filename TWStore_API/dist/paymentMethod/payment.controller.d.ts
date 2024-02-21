import { Response } from "express";
import { PaymentService } from "./payment.service";
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    GetAllPaymentMethod(res: Response): Promise<Response<any, Record<string, any>>>;
}
