import { BrandService } from "./brand.service";
import { Response } from 'express';
import { BrandDeleteRequestDTO } from "./dto/brand_delete_request";
import { BrandAddRequestDTO } from "./dto/brand_add_request";
export declare class BrandsCpanelController {
    private readonly brandService;
    constructor(brandService: BrandService);
    AddBrand(res: Response): Promise<any>;
    addBrand(requestDTO: BrandAddRequestDTO, body: any, res: Response): Promise<void>;
    quanlythuonghieu(res: Response): Promise<{
        brands: import("./dto/brand_getAll_response").BrandGetAllResponseDTO[];
    }>;
    deleteBrand(_id: BrandDeleteRequestDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
