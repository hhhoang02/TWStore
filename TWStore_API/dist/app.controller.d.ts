import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    getHello(): any;
    constructor(appService: AppService);
    table(res: Response): Promise<void>;
}
