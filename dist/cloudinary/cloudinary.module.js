"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryModule = void 0;
const common_1 = require("@nestjs/common");
const company_module_1 = require("../company/company.module");
const profiles_module_1 = require("../profiles/profiles.module");
const cloudinary_1 = require("./cloudinary");
const cloudinary_service_1 = require("./cloudinary.service");
let CloudinaryModule = class CloudinaryModule {
};
CloudinaryModule = __decorate([
    common_1.Module({
        imports: [common_1.forwardRef(() => profiles_module_1.ProfilesModule), common_1.forwardRef(() => company_module_1.CompanyModule)],
        providers: [cloudinary_1.Cloudinary, cloudinary_service_1.CloudinaryService],
        exports: [cloudinary_1.Cloudinary, cloudinary_service_1.CloudinaryService],
    })
], CloudinaryModule);
exports.CloudinaryModule = CloudinaryModule;
//# sourceMappingURL=cloudinary.module.js.map