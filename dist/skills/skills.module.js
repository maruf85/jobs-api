"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const profile_schema_1 = require("../profiles/schemas/profile.schema");
const skill_schema_1 = require("./schemas/skill.schema");
const skills_controller_1 = require("./skills.controller");
const skills_service_1 = require("./skills.service");
let SkillsModule = class SkillsModule {
};
SkillsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Profile', schema: profile_schema_1.ProfileSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Skill', schema: skill_schema_1.SkillSchema }]),
        ],
        controllers: [skills_controller_1.SkillsController],
        providers: [skills_service_1.SkillsService],
        exports: [skills_service_1.SkillsService],
    })
], SkillsModule);
exports.SkillsModule = SkillsModule;
//# sourceMappingURL=skills.module.js.map