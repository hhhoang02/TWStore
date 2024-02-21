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
exports.ColorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const color_schema_1 = require("./color.schema");
const mongoose_2 = require("mongoose");
let ColorService = class ColorService {
    constructor(ColorModel) {
        this.ColorModel = ColorModel;
    }
    async AddColor(requestDTO) {
        try {
            const { name, code } = requestDTO;
            const Color = await this.ColorModel.findOne({ name });
            if (Color) {
                return {
                    status: false,
                    message: 'Color already exists',
                };
            }
            const newColor = new this.ColorModel({ name, code });
            await newColor.save();
            return {
                status: true,
                message: 'Add Color successfully',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Add Color failed',
            };
        }
    }
    async GetAllColor() {
        try {
            const responseDTO = await this.ColorModel.find();
            return responseDTO;
        }
        catch (error) {
            return error;
        }
    }
    async DeleteColor(requestDTO) {
        try {
            const { id } = requestDTO;
            const Color = await this.ColorModel.findById(id);
            if (!Color)
                return {
                    status: false,
                    message: 'Color not found',
                };
            await this.ColorModel.findByIdAndDelete(id);
            return {
                status: true,
                message: 'Delete Color successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: 'Delete Color failed',
            };
        }
    }
};
exports.ColorService = ColorService;
exports.ColorService = ColorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(color_schema_1.Color.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ColorService);
//# sourceMappingURL=color.service.js.map