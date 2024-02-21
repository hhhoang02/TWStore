"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const banner_schema_1 = require("./banner.schema");
const banner_service_1 = require("./banner.service");
const banner_controller_1 = require("./banner.controller");
const banner_cpanel_controller_1 = require("./banner.cpanel.controller");
let BannerModule = class BannerModule {
};
exports.BannerModule = BannerModule;
exports.BannerModule = BannerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: banner_schema_1.Banner.name, schema: banner_schema_1.BannerSchema },
            ]),
        ],
        controllers: [banner_controller_1.BannerController, banner_cpanel_controller_1.BannerCpanelController],
        providers: [banner_service_1.BannerService],
    })
], BannerModule);
//# sourceMappingURL=banner.module.js.map