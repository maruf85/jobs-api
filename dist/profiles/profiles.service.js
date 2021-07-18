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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let ProfilesService = class ProfilesService {
    constructor(profileModel, cloudinaryService) {
        this.profileModel = profileModel;
        this.cloudinaryService = cloudinaryService;
    }
    async findAll() {
        try {
            return await this.profileModel
                .find()
                .populate('education experiences skills certifications languages')
                .populate({
                path: 'jobs',
                select: '-applicants',
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            return await this.profileModel.findOne({ _id: id });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(profile) {
        try {
            const newProfile = new this.profileModel(Object.assign({}, profile));
            return await newProfile.save();
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, profile) {
        try {
            return await this.profileModel.findByIdAndUpdate(id, Object.assign({}, profile), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateProfileImage(id, imageUrl, profile) {
        try {
            return await this.profileModel.findByIdAndUpdate(id, Object.assign(Object.assign({}, profile), { profileImage: imageUrl, updatedAt: new Date() }), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async uploadImageToCloudinary(file, profileId) {
        try {
            return await this.cloudinaryService.uploadUserProfileImage(file, profileId);
        }
        catch (error) {
            throw new common_1.BadRequestException(`${error.message}`, 'Invalid file type.');
        }
    }
};
ProfilesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Profile')),
    __param(1, common_1.Inject(common_1.forwardRef(() => cloudinary_service_1.CloudinaryService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cloudinary_service_1.CloudinaryService])
], ProfilesService);
exports.ProfilesService = ProfilesService;
//# sourceMappingURL=profiles.service.js.map