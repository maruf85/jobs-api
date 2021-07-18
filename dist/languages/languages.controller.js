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
exports.LanguagesController = void 0;
const common_1 = require("@nestjs/common");
const create_language_dto_1 = require("./dto/create-language.dto");
const update_language_dto_1 = require("./dto/update-language.dto");
const languages_service_1 = require("./languages.service");
let LanguagesController = class LanguagesController {
    constructor(languageService) {
        this.languageService = languageService;
    }
    findAll() {
        return this.languageService.findAll();
    }
    findOne(id) {
        return this.languageService.findOne(id);
    }
    create(createLanguageDto) {
        return this.languageService.create(createLanguageDto);
    }
    update(id, updateLanguageDto) {
        return this.languageService.update(id, updateLanguageDto);
    }
    remove(id) {
        return this.languageService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_language_dto_1.CreateLanguageDto]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_language_dto_1.UpdateLanguageDto]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LanguagesController.prototype, "remove", null);
LanguagesController = __decorate([
    common_1.Controller('languages'),
    __metadata("design:paramtypes", [languages_service_1.LanguagesService])
], LanguagesController);
exports.LanguagesController = LanguagesController;
//# sourceMappingURL=languages.controller.js.map