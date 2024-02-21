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
import { CategoryDocument } from "./category.schema";
import { Model } from "mongoose";
import { CategoryAddRequestDTO } from "./dto/category_add_request";
import { CategoryResponseDTO } from "./dto/category_response";
import { CategoryGetAllResponseDTO } from "./dto/category_getAll_response";
import { CategoryDeleteRequestDTO } from "./dto/category_delete_request";
export declare class CategoryService {
    private readonly categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    AddCategory(requestDTO: CategoryAddRequestDTO): Promise<CategoryResponseDTO>;
    GetAllCategory(): Promise<CategoryGetAllResponseDTO[]>;
    DeleteCategory(requestDTO: CategoryDeleteRequestDTO): Promise<CategoryResponseDTO>;
}
