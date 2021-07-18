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
exports.CompanyInfoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const company_interface_1 = require("../company/interfaces/company.interface");
let CompanyInfoService = class CompanyInfoService {
    constructor(companyInfoModel, companyModel) {
        this.companyInfoModel = companyInfoModel;
        this.companyModel = companyModel;
    }
    async findAll() {
        try {
            return await this.companyInfoModel.find();
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const companyInfo = await this.companyInfoModel.findOne({ _id: id });
            if (!companyInfo) {
                throw new common_1.NotFoundException('Company Info does not exist!');
            }
            return companyInfo;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(companyInfo) {
        try {
            const company = await this.companyModel.findOne({
                _id: companyInfo.companyId,
            });
            const newCompanyInfo = new this.companyInfoModel(Object.assign({}, companyInfo));
            const _companyInfo = await newCompanyInfo.save();
            if (company) {
                company.companyInfo = newCompanyInfo;
                await company.save();
            }
            return _companyInfo;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, companyInfo) {
        try {
            return await this.companyInfoModel.findByIdAndUpdate(id, Object.assign({}, companyInfo), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const companyInfo = await this.companyInfoModel.findByIdAndRemove(id);
            const company = await this.companyModel.findOne({
                _id: companyInfo.companyId,
            });
            if (company) {
                await this.companyModel.updateOne({
                    $unset: { companyInfo: companyInfo._id },
                });
            }
            return companyInfo;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
CompanyInfoService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('CompanyInfo')),
    __param(1, mongoose_1.InjectModel('Company')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CompanyInfoService);
exports.CompanyInfoService = CompanyInfoService;
//# sourceMappingURL=company-info.service.js.map