"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const categories_module_1 = require("./categories/categories.module");
const configuration_1 = require("./config/configuration");
const database_config_1 = require("./config/database.config");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const profiles_module_1 = require("./profiles/profiles.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const education_module_1 = require("./education/education.module");
const experiences_module_1 = require("./experiences/experiences.module");
const skills_module_1 = require("./skills/skills.module");
const certifications_module_1 = require("./certifications/certifications.module");
const languages_module_1 = require("./languages/languages.module");
const company_module_1 = require("./company/company.module");
const company_info_module_1 = require("./company-info/company-info.module");
const jobs_module_1 = require("./jobs/jobs.module");
const job_activity_module_1 = require("./job-activity/job-activity.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.configuration],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: database_config_1.DatabaseConfig,
            }),
            categories_module_1.CategoriesModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            profiles_module_1.ProfilesModule,
            cloudinary_module_1.CloudinaryModule,
            education_module_1.EducationModule,
            experiences_module_1.ExperiencesModule,
            skills_module_1.SkillsModule,
            certifications_module_1.CertificationsModule,
            languages_module_1.LanguagesModule,
            company_module_1.CompanyModule,
            company_info_module_1.CompanyInfoModule,
            jobs_module_1.JobsModule,
            job_activity_module_1.JobActivityModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map