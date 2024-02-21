import { Response } from 'express';
import { NotificationService } from './notifi.service';
export declare class NotificationController {
    private readonly NotificationService;
    constructor(NotificationService: NotificationService);
    getAllNotification(_idUser: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
