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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let CompanyService = class CompanyService {
    constructor(companyModel, cloudinaryService) {
        this.companyModel = companyModel;
        this.cloudinaryService = cloudinaryService;
    }
    async findAll() {
        try {
            return await this.companyModel
                .find()
                .populate({ path: 'companyInfo jobs' });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            return await this.companyModel.findOne({ _id: id });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(company) {
        try {
            const newCompany = new this.companyModel(Object.assign({}, company));
            return await newCompany.save();
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, company) {
        try {
            return await this.companyModel.findByIdAndUpdate(id, Object.assign({}, company), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async updateProfileImage(id, imageUrl, company) {
        try {
            return await this.companyModel.findByIdAndUpdate(id, Object.assign(Object.assign({}, company), { profileImage: imageUrl }), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async uploadImageToCloudinary(file, companyId) {
        try {
            return await this.cloudinaryService.uploadCompanyProfileImage(file, companyId);
        }
        catch (error) {
            throw new common_1.BadRequestException(`${error.message}`, 'Invalid file type.');
        }
    }
};
CompanyService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Company')),
    __param(1, common_1.Inject(common_1.forwardRef(() => cloudinary_service_1.CloudinaryService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cloudinary_service_1.CloudinaryService])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map