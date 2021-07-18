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
exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const profile_interface_1 = require("../profiles/interfaces/profile.interface");
let SkillsService = class SkillsService {
    constructor(skillModel, profileModel) {
        this.skillModel = skillModel;
        this.profileModel = profileModel;
    }
    async findAll() {
        try {
            return await this.skillModel.find();
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            return await this.skillModel.findOne({ _id: id });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(skill) {
        try {
            const profile = await this.profileModel.findOne({
                _id: skill.profileId,
            });
            const newSkill = new this.skillModel(Object.assign({}, skill));
            const _skill = await newSkill.save();
            if (profile) {
                profile.skills.push(newSkill);
                await profile.save();
            }
            return _skill;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, skill) {
        try {
            return await this.skillModel.findByIdAndUpdate(id, Object.assign({}, skill), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const skill = await this.skillModel.findByIdAndRemove(id);
            const profile = await this.profileModel.findOne({
                _id: skill.profileId,
            });
            if (profile) {
                await this.profileModel.updateOne({
                    $pull: { skills: skill._id },
                });
            }
            return skill;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
SkillsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Skill')),
    __param(1, mongoose_1.InjectModel('Profile')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], SkillsService);
exports.SkillsService = SkillsService;
//# sourceMappingURL=skills.service.js.map