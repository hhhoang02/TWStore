/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ProductGetByIdCategoryRequestDTO } from './dto/product_getProductbyIdCategory_request';
import { Model } from "mongoose";
import { ProductDocument } from "./product.schema";
import { ProductResponseDTO } from "./dto/product_response";
import { ProductUpdateDTO } from "./dto/product_update_request";
import { ProductGetResponseDTO } from "./dto/product_get_response";
import { ProductGetbyIdDTO } from "./dto/product_getProductbyID_request";
import { ProductGetByIdBrandRequestDTO } from './dto/product_getProductbyIdBranch_request';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    addProduct(requestDTO: any): Promise<ProductResponseDTO>;
    updateProduct(requestDTO: any): Promise<ProductResponseDTO>;
    deleteProduct(requestDTO: ProductUpdateDTO): Promise<ProductResponseDTO>;
    getAllProduct(): Promise<ProductGetResponseDTO[]>;
    getRecommendProduct(): Promise<ProductGetResponseDTO[]>;
    getProductById(requestDTO: ProductGetbyIdDTO): Promise<ProductGetResponseDTO>;
    getProductbyIdCategory(requestDTO: ProductGetByIdCategoryRequestDTO): Promise<any>;
    getProductbyIdBrand(requestDTO: ProductGetByIdBrandRequestDTO): Promise<any>;
}
