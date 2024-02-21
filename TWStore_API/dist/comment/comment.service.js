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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_schema_1 = require("./comment.schema");
let CommentService = class CommentService {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }
    async AddComment(requestDTO) {
        try {
            const date = new Date();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const { userID, productID, createAt = `${hour}:${minutes}, ${day}/${month}/${year}`, content, image, star } = requestDTO;
            const comment = await this.commentModel.findOne({ userID });
            if (comment) {
                return {
                    status: false,
                    message: 'Comment already exists',
                };
            }
            const newComment = new this.commentModel({ userID, productID, createAt, content, image, star });
            await newComment.save();
            return {
                status: true,
                message: 'Add Comment successfully',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Add Comment failed',
            };
        }
    }
    async GetCommentbyIdProduct(requestDTO) {
        try {
            const _id = requestDTO;
            const responseDTO = await this.commentModel.find({ productID: _id })
                .populate([
                { path: 'userID', select: 'name username avatar' },
                { path: 'productID', select: 'createAt content image star' }
            ]);
            return responseDTO;
        }
        catch (error) {
            return null;
        }
    }
    async DeleteComment(requestDTO) {
        try {
            const { _id } = requestDTO;
            const comment = await this.commentModel.findByIdAndDelete(_id);
            if (!comment)
                return {
                    status: false,
                    message: 'comment not found',
                };
            await this.commentModel.findByIdAndDelete(_id);
            return {
                status: true,
                message: 'Delete comment successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: 'Delete comment failed',
            };
        }
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommentService);
//# sourceMappingURL=comment.service.js.map