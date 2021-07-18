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
exports.EducationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const profile_interface_1 = require("../profiles/interfaces/profile.interface");
let EducationService = class EducationService {
    constructor(educationModel, profileModel) {
        this.educationModel = educationModel;
        this.profileModel = profileModel;
    }
    async findAll() {
        try {
            return await this.educationModel.find();
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            return await this.educationModel.findOne({ _id: id });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(education) {
        try {
            const profile = await this.profileModel.findOne({
                _id: education.profileId,
            });
            const newEducation = new this.educationModel(Object.assign({}, education));
            const _education = await newEducation.save();
            if (profile) {
                profile.education.push(newEducation);
                await profile.save();
            }
            return _education;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, education) {
        try {
            return await this.educationModel.findByIdAndUpdate(id, Object.assign({}, education), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const education = await this.educationModel.findByIdAndRemove(id);
            const profile = await this.profileModel.findOne({
                _id: education.profileId,
            });
            if (profile) {
                await this.profileModel.updateOne({
                    $pull: { education: education._id },
                });
            }
            return education;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
EducationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Education')),
    __param(1, mongoose_1.InjectModel('Profile')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], EducationService);
exports.EducationService = EducationService;
//# sourceMappingURL=education.service.js.map