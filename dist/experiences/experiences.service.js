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
exports.ExperiencesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const profile_interface_1 = require("../profiles/interfaces/profile.interface");
let ExperiencesService = class ExperiencesService {
    constructor(experienceModel, profileModel) {
        this.experienceModel = experienceModel;
        this.profileModel = profileModel;
    }
    async findAll() {
        try {
            return await this.experienceModel.find();
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            return await this.experienceModel.findOne({ _id: id });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(experience) {
        try {
            const profile = await this.profileModel.findOne({
                _id: experience.profileId,
            });
            const newExperience = new this.experienceModel(Object.assign({}, experience));
            const _experience = await newExperience.save();
            if (profile) {
                profile.experiences.push(newExperience);
                await profile.save();
            }
            return _experience;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, experience) {
        try {
            return await this.experienceModel.findByIdAndUpdate(id, Object.assign({}, experience), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const experience = await this.experienceModel.findByIdAndRemove(id);
            const profile = await this.profileModel.findOne({
                _id: experience.profileId,
            });
            if (profile) {
                await this.profileModel.updateOne({
                    $pull: { experiences: experience._id },
                });
            }
            return experience;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
ExperiencesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Experience')),
    __param(1, mongoose_1.InjectModel('Profile')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ExperiencesService);
exports.ExperiencesService = ExperiencesService;
//# sourceMappingURL=experiences.service.js.map