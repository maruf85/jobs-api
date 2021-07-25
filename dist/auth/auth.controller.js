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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const create_company_dto_1 = require("../company/dto/create-company.dto");
const role_enum_1 = require("../constants/role.enum");
const userType_enum_1 = require("../constants/userType.enum");
const create_profile_dto_1 = require("../profiles/dto/create-profile.dto");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const user_interface_1 = require("../users/interfaces/user.interface");
const users_service_1 = require("../users/users.service");
const auth_service_1 = require("./auth.service");
const roles_decorator_1 = require("./decorators/roles.decorator");
const login_user_dto_1 = require("./dto/login-user.dto");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const local_auth_gaurd_1 = require("./guards/local-auth.gaurd");
const roles_guard_1 = require("./guards/roles.guard");
let AuthController = class AuthController {
    constructor(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    create(createProfileDto, createCompanyDto, createUserDto) {
        return createUserDto.userType === userType_enum_1.UserType.RECRUITER
            ? this.usersService.createCompany(createCompanyDto, createUserDto)
            : this.usersService.createProfile(createProfileDto, createUserDto);
    }
    login(loginUserDto, response) {
        return this.authService.login(loginUserDto, response);
    }
    logout(response) {
        return this.authService.logout(response);
    }
    protected() {
        return 'protected route';
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __param(1, common_1.Body()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profile_dto_1.CreateProfileDto,
        create_company_dto_1.CreateCompanyDto,
        create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
__decorate([
    common_1.UseGuards(local_auth_gaurd_1.LocalAuthGaurd),
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto, Object]),
    __metadata("design:returntype", Object)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('logout'),
    __param(0, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    roles_decorator_1.Roles(role_enum_1.Role.ADMIN),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Get('protected'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AuthController.prototype, "protected", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map