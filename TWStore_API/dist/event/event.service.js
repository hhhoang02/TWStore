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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const upload_1 = require("../upload/upload");
let EventService = class EventService {
    constructor(eventModel) {
        this.eventModel = eventModel;
    }
    async addEvent(requestDTO) {
        try {
            const body = requestDTO.body;
            const files = requestDTO.files;
            const url = await (0, upload_1.default)(files, "Event");
            const { eventName, levelGiamgia, soNgayGiamgia, product } = body;
            const newEvent = new this.eventModel({ eventImage: url, eventName, levelGiamgia, soNgayGiamgia, product });
            await newEvent.save();
            return {
                status: true,
                message: 'Add event successfully',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Add event failed',
            };
        }
    }
    async getAllEvent() {
        try {
            const event = await this.eventModel.find().populate('product');
            return event;
        }
        catch (error) {
            return;
        }
    }
    async deleteEvent(_id) {
        try {
            const { id } = _id;
            await this.eventModel.findByIdAndDelete(id);
            return {
                status: true,
                message: 'Delete event successfull',
            };
        }
        catch (error) {
            console.log(error);
            return {
                status: false,
                message: 'Delete event failed',
            };
        }
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Event.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventService);
//# sourceMappingURL=event.service.js.map