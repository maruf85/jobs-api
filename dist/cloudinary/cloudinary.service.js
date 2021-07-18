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
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const toStream = require("buffer-to-stream");
const profiles_service_1 = require("../profiles/profiles.service");
const company_service_1 = require("../company/company.service");
let CloudinaryService = class CloudinaryService {
    constructor(profileService, companyService) {
        this.profileService = profileService;
        this.companyService = companyService;
    }
    async uploadUserProfileImage(file, profileId) {
        try {
            return new Promise((resolve, reject) => {
                const upload = cloudinary_1.v2.uploader.upload_stream((error, result) => {
                    if (error)
                        return reject(error);
                    resolve(result);
                    const imageUrl = result.secure_url;
                    this.profileService.updateProfileImage(profileId, imageUrl);
                });
                toStream(file.buffer).pipe(upload);
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async uploadCompanyProfileImage(file, companyId) {
        try {
            return new Promise((resolve, reject) => {
                const upload = cloudinary_1.v2.uploader.upload_stream((error, result) => {
                    if (error)
                        return reject(error);
                    resolve(result);
                    const imageUrl = result.secure_url;
                    this.companyService.updateProfileImage(companyId, imageUrl);
                });
                toStream(file.buffer).pipe(upload);
            });
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
CloudinaryService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_1.forwardRef(() => profiles_service_1.ProfilesService))),
    __param(1, common_1.Inject(common_1.forwardRef(() => company_service_1.CompanyService))),
    __metadata("design:paramtypes", [profiles_service_1.ProfilesService,
        company_service_1.CompanyService])
], CloudinaryService);
exports.CloudinaryService = CloudinaryService;
//# sourceMappingURL=cloudinary.service.js.map