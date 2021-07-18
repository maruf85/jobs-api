"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobActivityModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const job_schema_1 = require("../jobs/schemas/job.schema");
const profile_schema_1 = require("../profiles/schemas/profile.schema");
const job_activity_controller_1 = require("./job-activity.controller");
const job_activity_service_1 = require("./job-activity.service");
const job_activity_schema_1 = require("./schemas/job-activity.schema");
let JobActivityModule = class JobActivityModule {
};
JobActivityModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Profile', schema: profile_schema_1.ProfileSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Job', schema: job_schema_1.JobSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: 'JobActivity', schema: job_activity_schema_1.JobActivitySchema },
            ]),
        ],
        controllers: [job_activity_controller_1.JobActivityController],
        providers: [job_activity_service_1.JobActivityService],
    })
], JobActivityModule);
exports.JobActivityModule = JobActivityModule;
//# sourceMappingURL=job-activity.module.js.map