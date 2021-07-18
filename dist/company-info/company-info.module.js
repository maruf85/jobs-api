"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyInfoModule = void 0;
const common_1 = require("@nestjs/common");
const company_info_service_1 = require("./company-info.service");
const company_info_controller_1 = require("./company-info.controller");
const mongoose_1 = require("@nestjs/mongoose");
const company_schema_1 = require("../company/schemas/company.schema");
const company_info_schema_1 = require("./schemas/company-info.schema");
let CompanyInfoModule = class CompanyInfoModule {
};
CompanyInfoModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Company', schema: company_schema_1.CompanySchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: 'CompanyInfo', schema: company_info_schema_1.CompanyInfoSchema },
            ]),
        ],
        providers: [company_info_service_1.CompanyInfoService],
        controllers: [company_info_controller_1.CompanyInfoController],
        exports: [company_info_service_1.CompanyInfoService],
    })
], CompanyInfoModule);
exports.CompanyInfoModule = CompanyInfoModule;
//# sourceMappingURL=company-info.module.js.map