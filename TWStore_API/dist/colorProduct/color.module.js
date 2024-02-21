"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const color_schema_1 = require("./color.schema");
const color_controller_1 = require("./color.controller");
const color_service_1 = require("./color.service");
const color_cpanel_controller_1 = require("./color.cpanel.controller");
let ColorModule = class ColorModule {
};
exports.ColorModule = ColorModule;
exports.ColorModule = ColorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: color_schema_1.Color.name, schema: color_schema_1.ColorSchema },
            ]),
        ],
        controllers: [color_controller_1.ColorController, color_cpanel_controller_1.ColorsCpanelController],
        providers: [color_service_1.ColorService],
        exports: [color_service_1.ColorService]
    })
], ColorModule);
//# sourceMappingURL=color.module.js.map