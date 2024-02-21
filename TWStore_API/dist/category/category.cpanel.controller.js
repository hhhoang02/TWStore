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
exports.CategoryCpanelController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const category_service_1 = require("./category.service");
const category_add_request_1 = require("./dto/category_add_request");
const authWeb_guard_1 = require("../auth/authWeb.guard");
let CategoryCpanelController = class CategoryCpanelController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async quanlysanpham(res) {
        try {
            const category = await this.categoryService.GetAllCategory();
            return { category: category };
        }
        catch (error) {
        }
    }
    async AddCategory(res) {
        try {
            return {};
        }
        catch (error) {
            return error;
        }
    }
    async addCategory(body, res) {
        try {
            await this.categoryService.AddCategory(body);
            return res.redirect('/categoriesCpanel/quanlytheloai');
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteCategory(_id, res) {
        try {
            await this.categoryService.DeleteCategory(_id);
            return res.json({ result: true });
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.CategoryCpanelController = CategoryCpanelController;
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('quanlytheloai'),
    (0, common_1.Render)('quanlytheloai'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryCpanelController.prototype, "quanlysanpham", null);
__decorate([
    (0, common_1.UseGuards)(authWeb_guard_1.AuthenticatedGuard),
    (0, common_1.Get)('addCategory'),
    (0, common_1.Render)('addCategory'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryCpanelController.prototype, "AddCategory", null);
__decorate([
    (0, common_1.Post)('addCategory'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_add_request_1.CategoryAddRequestDTO, Object]),
    __metadata("design:returntype", Promise)
], CategoryCpanelController.prototype, "addCategory", null);
__decorate([
    (0, common_1.Delete)('deleteCategory/:_id/delete'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object]),
    __metadata("design:returntype", Promise)
], CategoryCpanelController.prototype, "deleteCategory", null);
exports.CategoryCpanelController = CategoryCpanelController = __decorate([
    (0, common_1.Controller)('categoriesCpanel'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryCpanelController);
//# sourceMappingURL=category.cpanel.controller.js.map