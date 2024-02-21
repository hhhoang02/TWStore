import { BannerService } from "./banner.service";
import { Response } from "express";
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    GetAllBanner(res: Response): Promise<Response<any, Record<string, any>>>;
}
