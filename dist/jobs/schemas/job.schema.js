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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSchema = exports.Job = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const jobType_enum_1 = require("../../constants/jobType.enum");
const skillLevel_enum_1 = require("../../constants/skillLevel.enum");
const profile_interface_1 = require("../../profiles/interfaces/profile.interface");
let Job = class Job extends mongoose.Document {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Job.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Job.prototype, "description", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Date)
], Job.prototype, "deadline", void 0);
__decorate([
    mongoose_1.Prop({ enum: jobType_enum_1.JobType }),
    __metadata("design:type", String)
], Job.prototype, "jobType", void 0);
__decorate([
    mongoose_1.Prop({ enum: skillLevel_enum_1.SkillLevel }),
    __metadata("design:type", String)
], Job.prototype, "skillLevel", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Job.prototype, "salary", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], Job.prototype, "isRemote", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: true }),
    __metadata("design:type", Boolean)
], Job.prototype, "isActive", void 0);
__decorate([
    mongoose_1.Prop({ required: true, default: true }),
    __metadata("design:type", Boolean)
], Job.prototype, "isPublished", void 0);
__decorate([
    mongoose_1.Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
    }),
    __metadata("design:type", String)
], Job.prototype, "companyId", void 0);
__decorate([
    mongoose_1.Prop([
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile',
        },
    ]),
    __metadata("design:type", Object)
], Job.prototype, "applicants", void 0);
Job = __decorate([
    mongoose_1.Schema({ timestamps: true })
], Job);
exports.Job = Job;
exports.JobSchema = mongoose_1.SchemaFactory.createForClass(Job);
//# sourceMappingURL=job.schema.js.map