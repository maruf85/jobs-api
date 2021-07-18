"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperiencesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const profile_schema_1 = require("../profiles/schemas/profile.schema");
const experiences_controller_1 = require("./experiences.controller");
const experiences_service_1 = require("./experiences.service");
const experience_schema_1 = require("./schemas/experience.schema");
let ExperiencesModule = class ExperiencesModule {
};
ExperiencesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Profile', schema: profile_schema_1.ProfileSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: 'Experience', schema: experience_schema_1.ExperienceSchema },
            ]),
        ],
        controllers: [experiences_controller_1.ExperiencesController],
        providers: [experiences_service_1.ExperiencesService],
        exports: [experiences_service_1.ExperiencesService],
    })
], ExperiencesModule);
exports.ExperiencesModule = ExperiencesModule;
//# sourceMappingURL=experiences.module.js.map