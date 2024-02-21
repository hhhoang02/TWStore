import { SizeService } from "./size.service";
import { Response } from 'express';
import { SizeDeleteRequestDTO } from "./dto/size_delete_request";
import { SizeAddRequestDTO } from "./dto/size_add_request";
export declare class SizesCpanelController {
    private readonly sizeService;
    constructor(sizeService: SizeService);
    quanlykichco(res: Response): Promise<{
        sizes: import("./dto/size_getAll_response").SizeGetAllResponseDTO[];
    }>;
    AddSizeRender(res: Response): Promise<{
        sizes: import("./dto/size_getAll_response").SizeGetAllResponseDTO[];
    }>;
    AddSize(body: SizeAddRequestDTO, res: Response): Promise<void | Response<any, Record<string, any>>>;
    DeleteSize(id: SizeDeleteRequestDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
