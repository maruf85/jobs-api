"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesModule = void 0;
const common_1 = require("@nestjs/common");
const languages_service_1 = require("./languages.service");
const languages_controller_1 = require("./languages.controller");
const mongoose_1 = require("@nestjs/mongoose");
const profile_schema_1 = require("../profiles/schemas/profile.schema");
const language_schema_1 = require("./schemas/language.schema");
let LanguagesModule = class LanguagesModule {
};
LanguagesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Profile', schema: profile_schema_1.ProfileSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Language', schema: language_schema_1.LanguageSchema }]),
        ],
        providers: [languages_service_1.LanguagesService],
        controllers: [languages_controller_1.LanguagesController],
        exports: [languages_service_1.LanguagesService],
    })
], LanguagesModule);
exports.LanguagesModule = LanguagesModule;
//# sourceMappingURL=languages.module.js.map