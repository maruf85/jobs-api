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
exports.CategoriesService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let CategoriesService = class CategoriesService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async findAll() {
        try {
            return await this.categoryModel.find();
        }
        catch (error) {
            throw new common_1.HttpException(`${error.message}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        return await this.categoryModel.findOne({ _id: id });
    }
    async create(category) {
        const newCategory = new this.categoryModel(Object.assign(Object.assign({}, category), { createdAt: new Date() }));
        return await newCategory.save();
    }
    async update(id, category) {
        return await this.categoryModel.findByIdAndUpdate(id, Object.assign(Object.assign({}, category), { updatedAt: new Date() }), {
            new: true,
        });
    }
    async delete(id) {
        return await this.categoryModel.findByIdAndRemove(id);
    }
};
CategoriesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Category')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map