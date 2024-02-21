import { Response } from 'express';
import { NotificationService } from './notifi.service';
export declare class NotificationCpanelController {
    private readonly notifiService;
    constructor(notifiService: NotificationService);
    addNotification(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
}
