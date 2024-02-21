import { CommentService } from "./comment.service";
import { CommentAddRequestDTO } from "./dto/comment_add_request";
import { Response } from "express";
import { CommentDeleteRequestDTO } from "./dto/comment_delete_request";
import { CommentGetbyProducRequesttDTO } from "./dto/comment_getbyProduct_request";
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    AddComment(body: CommentAddRequestDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    GetCommentbyProduct(_id: CommentGetbyProducRequesttDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    DeleteComment(_id: CommentDeleteRequestDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
