import { EventService } from './event.service';
import { ProductService } from 'src/product/product.service';
import { Response } from 'express';
export declare class EventController {
    private readonly eventService;
    private readonly productService;
    constructor(eventService: EventService, productService: ProductService);
    getAllEvent(res: Response): Promise<Response<any, Record<string, any>>>;
}
