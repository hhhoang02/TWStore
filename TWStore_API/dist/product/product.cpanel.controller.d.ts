/// <reference types="multer" />
import { ProductService } from './product.service';
import { Request, Response } from 'express';
import { CategoryService } from 'src/category/category.service';
import { CategoryGetAllResponseDTO } from 'src/category/dto/category_getAll_response';
import { ColorService } from 'src/colorProduct/color.service';
import { SizeService } from 'src/size/size.service';
import { BrandService } from 'src/brand/brand.service';
import { ProductGetbyIdDTO } from './dto/product_getProductbyID_request';
import { ProductUpdateDTO } from './dto/product_update_request';
export declare class ProductsCpanelController {
    private readonly productService;
    private readonly categoryService;
    private readonly colorService;
    private readonly sizeService;
    private readonly brandService;
    constructor(productService: ProductService, categoryService: CategoryService, colorService: ColorService, sizeService: SizeService, brandService: BrandService);
    addProductCpanel(res: Response): Promise<{
        categories: CategoryGetAllResponseDTO[];
        colors: import("../colorProduct/dto/color_getAll_response").ColorGetAllResponseDTO[];
        sizes: import("../size/dto/size_getAll_response").SizeGetAllResponseDTO[];
        brands: import("../brand/dto/brand_getAll_response").BrandGetAllResponseDTO[];
    }>;
    addProduct(body: any, files: {
        image?: Express.Multer.File[];
    }, res: Response): Promise<void>;
    productDetail(_id: ProductGetbyIdDTO, res: Response): Promise<{
        product: any;
        categories: CategoryGetAllResponseDTO[];
        colors: import("../colorProduct/dto/color_getAll_response").ColorGetAllResponseDTO[];
        sizes: import("../size/dto/size_getAll_response").SizeGetAllResponseDTO[];
        brands: import("../brand/dto/brand_getAll_response").BrandGetAllResponseDTO[];
        imageProduct: any;
    }>;
    editProduct(_id: ProductGetbyIdDTO, body: ProductUpdateDTO, files: {
        image?: Express.Multer.File[];
    }, res: Response): Promise<void>;
    deleteProduct(_id: ProductUpdateDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    quanlysanpham(request: Request, res: Response): Promise<{
        productUpdate: {
            products: any;
            price: any;
        }[];
    }>;
}
