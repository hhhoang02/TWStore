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
exports.SizeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const size_schema_1 = require("./size.schema");
const mongoose_2 = require("mongoose");
let SizeService = class SizeService {
    constructor(sizeModel) {
        this.sizeModel = sizeModel;
    }
    async AddSize(requestDTO) {
        try {
            const { name } = requestDTO;
            const size = await this.sizeModel.findOne({ name });
            if (size) {
                return {
                    status: false,
                    message: 'Size already exists',
                };
            }
            const newSize = new this.sizeModel({ name });
            await newSize.save();
            return {
                status: true,
                message: 'Add Size successfully',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Add Size failed',
            };
        }
    }
    async GetAllSize() {
        try {
            const responseDTO = await this.sizeModel.find();
            return responseDTO;
        }
        catch (error) {
            return error;
        }
    }
    async DeleteSize(requestDTO) {
        try {
            const { id } = requestDTO;
            const Size = await this.sizeModel.findById(id);
            if (!Size)
                return {
                    status: false,
                    message: 'Size not found',
                };
            await this.sizeModel.findByIdAndDelete(id);
            return {
                status: true,
                message: 'Delete Size successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: 'Delete Size failed',
            };
        }
    }
};
exports.SizeService = SizeService;
exports.SizeService = SizeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(size_schema_1.Size.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SizeService);
//# sourceMappingURL=size.service.js.map