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
import { Model } from "mongoose";
import { CommentDocument } from "./comment.schema";
import { CommentAddRequestDTO } from "./dto/comment_add_request";
import { CommentResponseDTO } from "./dto/comment_response";
import { CommentDeleteRequestDTO } from "./dto/comment_delete_request";
import { CommentGetbyProducRequesttDTO } from "./dto/comment_getbyProduct_request";
export declare class CommentService {
    private readonly commentModel;
    constructor(commentModel: Model<CommentDocument>);
    AddComment(requestDTO: CommentAddRequestDTO): Promise<CommentResponseDTO>;
    GetCommentbyIdProduct(requestDTO: CommentGetbyProducRequesttDTO): Promise<CommentGetbyProducRequesttDTO[] | null>;
    DeleteComment(requestDTO: CommentDeleteRequestDTO): Promise<CommentResponseDTO>;
}
