import { ProductService } from "./product.service";
import { Response } from "express";
import { ProductGetbyIdDTO } from "./dto/product_getProductbyID_request";
import { ProductGetByIdCategoryRequestDTO } from "./dto/product_getProductbyIdCategory_request";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    GetAllProduct(res: Response): Promise<Response<any, Record<string, any>>>;
    GetProductById(_id: ProductGetbyIdDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    GetProductByIdCategory(_id: ProductGetByIdCategoryRequestDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    GetProductByIdBrand(params: any, res: Response): Promise<Response<any, Record<string, any>>>;
    updateQuantityProduct(_id: string, body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    getRecommendProduct(res: Response): Promise<Response<any, Record<string, any>>>;
}
