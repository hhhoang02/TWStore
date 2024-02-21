import { BrandService } from "./brand.service";
import { Response } from "express";
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    GetAllBrand(res: Response): Promise<Response<any, Record<string, any>>>;
}
