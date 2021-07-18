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
exports.JobActivityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const job_interface_1 = require("../jobs/interfaces/job.interface");
const profile_interface_1 = require("../profiles/interfaces/profile.interface");
let JobActivityService = class JobActivityService {
    constructor(jobActivityModel, jobModel, profileModel) {
        this.jobActivityModel = jobActivityModel;
        this.jobModel = jobModel;
        this.profileModel = profileModel;
    }
    async findAll() {
        try {
            return await this.jobActivityModel.find();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async findOne(id) {
        try {
            return await this.jobActivityModel.findOne({ _id: id });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async create(createJobActivityDto) {
        try {
            const job = await this.jobModel.findOne({
                _id: createJobActivityDto.jobId,
            });
            const profile = await this.profileModel.findOne({
                _id: createJobActivityDto.profileId,
            });
            const newJobActivity = new this.jobActivityModel(Object.assign({}, createJobActivityDto));
            const isjobApplied = profile.jobs.includes(createJobActivityDto.jobId);
            if (isjobApplied) {
                throw new common_1.HttpException('Already applied', common_1.HttpStatus.BAD_REQUEST);
            }
            if (profile && job) {
                profile.jobs.push(newJobActivity.jobId);
                await profile.save();
                job.applicants.push(newJobActivity.profileId);
                await job.save();
            }
            return await newJobActivity.save();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
JobActivityService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('JobActivity')),
    __param(1, mongoose_1.InjectModel('Job')),
    __param(2, mongoose_1.InjectModel('Profile')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], JobActivityService);
exports.JobActivityService = JobActivityService;
//# sourceMappingURL=job-activity.service.js.map