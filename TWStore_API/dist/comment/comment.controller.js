"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const comment_add_request_1 = require("./dto/comment_add_request");
const comment_delete_request_1 = require("./dto/comment_delete_request");
const comment_getbyProduct_request_1 = require("./dto/comment_getbyProduct_request");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async AddComment(body, res) {
        try {
            const responseDTO = await this.commentService.AddComment(body);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.OK).json(error);
        }
    }
    async GetCommentbyProduct(_id, res) {
        try {
            const responseDTO = await this.commentService.GetCommentbyIdProduct(_id);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.OK).json(error);
        }
    }
    async DeleteComment(_id, res) {
        try {
            const responseDTO = await this.commentService.DeleteComment(_id);
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.OK).json(error);
        }
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, common_1.Post)('addComment'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_add_request_1.CommentAddRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "AddComment", null);
__decorate([
    (0, common_1.Get)('getCommentbyIdProduct/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_getbyProduct_request_1.CommentGetbyProducRequesttDTO, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "GetCommentbyProduct", null);
__decorate([
    (0, common_1.Post)('deleteComment/:_id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_delete_request_1.CommentDeleteRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "DeleteComment", null);
exports.CommentController = CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map