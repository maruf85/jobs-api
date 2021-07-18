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
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const auth_service_1 = require("../auth/auth.service");
const profiles_service_1 = require("../profiles/profiles.service");
const profile_interface_1 = require("../profiles/interfaces/profile.interface");
const company_interface_1 = require("../company/interfaces/company.interface");
const company_service_1 = require("../company/company.service");
let UsersService = class UsersService {
    constructor(userModel, authService, profileService, companyService) {
        this.userModel = userModel;
        this.authService = authService;
        this.profileService = profileService;
        this.companyService = companyService;
    }
    async findAll() {
        try {
            return await this.userModel
                .find()
                .select('-password')
                .populate({
                path: 'profile',
                select: '-education -experiences -skills -certifications -languages',
            })
                .populate({
                path: 'company',
                select: '-companyInfo',
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findByUserName(username) {
        try {
            return await this.userModel.findOne({ username: username });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findById(userId) {
        try {
            return await this.userModel.findOne({ _id: userId });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createProfile(profile, userInterface) {
        const { username } = userInterface;
        const user = await this.userModel.findOne({ username });
        if (user) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const getProfileId = async () => {
                const result = await this.profileService.create(profile);
                return result.id;
            };
            const profileId = await getProfileId();
            return await this.authService
                .hashPassword(userInterface.password)
                .then((hashedPassword) => {
                const newUser = new this.userModel(Object.assign(Object.assign({}, userInterface), { password: hashedPassword, profile: profileId }));
                return newUser.save();
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createCompany(company, userInterface) {
        const { username } = userInterface;
        const user = await this.userModel.findOne({ username });
        if (user) {
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const getCompanyId = async () => {
                const result = await this.companyService.create(company);
                return result.id;
            };
            const companyId = await getCompanyId();
            return await this.authService
                .hashPassword(userInterface.password)
                .then((hashedPassword) => {
                const newUser = new this.userModel(Object.assign(Object.assign({}, userInterface), { password: hashedPassword, company: companyId }));
                return newUser.save();
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, user) {
        try {
            return await this.userModel.findByIdAndUpdate(id, Object.assign({}, user), {
                new: true,
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            return await this.userModel.findByIdAndRemove(id);
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __param(1, common_1.Inject(common_1.forwardRef(() => auth_service_1.AuthService))),
    __param(2, common_1.Inject(common_1.forwardRef(() => profiles_service_1.ProfilesService))),
    __param(3, common_1.Inject(common_1.forwardRef(() => company_service_1.CompanyService))),
    __metadata("design:paramtypes", [mongoose_1.Model,
        auth_service_1.AuthService,
        profiles_service_1.ProfilesService,
        company_service_1.CompanyService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map