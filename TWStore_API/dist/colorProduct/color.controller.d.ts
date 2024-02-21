import { ColorService } from "./color.service";
import { Response } from "express";
export declare class ColorController {
    private readonly ColorService;
    constructor(ColorService: ColorService);
    GetAllColor(res: Response): Promise<Response<any, Record<string, any>>>;
}
