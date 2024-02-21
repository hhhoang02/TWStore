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
exports.ColorController = void 0;
const common_1 = require("@nestjs/common");
const color_service_1 = require("./color.service");
let ColorController = class ColorController {
    constructor(ColorService) {
        this.ColorService = ColorService;
    }
    async GetAllColor(res) {
        try {
            const responseDTO = await this.ColorService.GetAllColor();
            return res.status(common_1.HttpStatus.OK).json(responseDTO);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json(error);
        }
    }
};
exports.ColorController = ColorController;
__decorate([
    (0, common_1.Get)('getAllColor'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "GetAllColor", null);
exports.ColorController = ColorController = __decorate([
    (0, common_1.Controller)('color'),
    __metadata("design:paramtypes", [color_service_1.ColorService])
], ColorController);
//# sourceMappingURL=color.controller.js.map