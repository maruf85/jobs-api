"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsModule = void 0;
const common_1 = require("@nestjs/common");
const jobs_service_1 = require("./jobs.service");
const jobs_controller_1 = require("./jobs.controller");
const mongoose_1 = require("@nestjs/mongoose");
const company_schema_1 = require("../company/schemas/company.schema");
const job_schema_1 = require("./schemas/job.schema");
let JobsModule = class JobsModule {
};
JobsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Company', schema: company_schema_1.CompanySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Job', schema: job_schema_1.JobSchema }]),
        ],
        providers: [jobs_service_1.JobsService],
        controllers: [jobs_controller_1.JobsController],
    })
], JobsModule);
exports.JobsModule = JobsModule;
//# sourceMappingURL=jobs.module.js.map