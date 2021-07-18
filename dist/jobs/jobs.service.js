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
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const company_interface_1 = require("../company/interfaces/company.interface");
let JobsService = class JobsService {
    constructor(jobModel, companyModel) {
        this.jobModel = jobModel;
        this.companyModel = companyModel;
    }
    async findAll() {
        try {
            return await this.jobModel.find().populate({
                path: 'applicants',
                select: '-jobs',
                populate: {
                    path: 'education experiences skills certifications languages',
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(jobId) {
        try {
            const job = await this.jobModel.findOne({ _id: jobId });
            if (!job) {
                throw new common_1.NotFoundException('Company Info does not exist!');
            }
            return job;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(createJobDto) {
        try {
            const company = await this.companyModel.findOne({
                _id: createJobDto.companyId,
            });
            const newJob = new this.jobModel(Object.assign({}, createJobDto));
            const job = await newJob.save();
            if (company) {
                company.jobs.push(newJob);
                await company.save();
            }
            return job;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(jobId, updateJobDto) {
        try {
            return await this.jobModel.findByIdAndUpdate(jobId, Object.assign({}, updateJobDto), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(jobId) {
        try {
            const job = await this.jobModel.findByIdAndRemove(jobId);
            const company = await this.companyModel.findOne({
                _id: job.companyId,
            });
            if (company) {
                await this.companyModel.updateOne({
                    $pull: { jobs: job._id },
                });
            }
            return job;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
JobsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Job')),
    __param(1, mongoose_1.InjectModel('Company')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], JobsService);
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map