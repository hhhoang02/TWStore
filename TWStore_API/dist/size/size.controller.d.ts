import { SizeService } from "./size.service";
import { Response } from "express";
export declare class SizeController {
    private readonly sizeService;
    constructor(sizeService: SizeService);
    GetAllSize(res: Response): Promise<Response<any, Record<string, any>>>;
}
