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
var NotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const notifi_schema_1 = require("./notifi.schema");
let NotificationService = NotificationService_1 = class NotificationService {
    constructor(notifiModel) {
        this.notifiModel = notifiModel;
        this.logger = new common_1.Logger(NotificationService_1.name);
    }
    async addNotification(requestDTO) {
        try {
            const { _idUser, title, content } = requestDTO;
            const newNotifi = new this.notifiModel({
                _idUser,
                title,
                content,
            });
            await newNotifi.save();
            return {
                status: true,
                message: 'Notification added successfully',
            };
        }
        catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    async getAllNotification(_idUser) {
        try {
            const notifi = await this.notifiModel.find({ _idUser });
            this.logger.log('Get all notifications successfully');
            return notifi;
        }
        catch (error) {
            this.logger.error(`Failed to get all notifications: ${error.message}`);
            return;
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = NotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(notifi_schema_1.Notification.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotificationService);
//# sourceMappingURL=notifi.service.js.map