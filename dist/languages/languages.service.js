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
exports.LanguagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const profile_interface_1 = require("../profiles/interfaces/profile.interface");
let LanguagesService = class LanguagesService {
    constructor(languageModel, profileModel) {
        this.languageModel = languageModel;
        this.profileModel = profileModel;
    }
    async findAll() {
        try {
            return await this.languageModel.find();
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            return await this.languageModel.findOne({ _id: id });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(language) {
        try {
            const profile = await this.profileModel.findOne({
                _id: language.profileId,
            });
            const newLanguage = new this.languageModel(Object.assign({}, language));
            const _language = await newLanguage.save();
            if (profile) {
                profile.languages.push(newLanguage);
                await profile.save();
            }
            return _language;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, language) {
        try {
            return await this.languageModel.findByIdAndUpdate(id, Object.assign({}, language), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const language = await this.languageModel.findByIdAndRemove(id);
            const profile = await this.profileModel.findOne({
                _id: language.profileId,
            });
            if (profile) {
                await this.profileModel.updateOne({
                    $pull: { languages: language._id },
                });
            }
            return language;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
LanguagesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Language')),
    __param(1, mongoose_1.InjectModel('Profile')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], LanguagesService);
exports.LanguagesService = LanguagesService;
//# sourceMappingURL=languages.service.js.map