"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const userType_enum_1 = require("../../constants/userType.enum");
const role_enum_1 = require("../../constants/role.enum");
exports.UserSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        select: true,
    },
    role: {
        type: String,
        enum: role_enum_1.Role,
        default: role_enum_1.Role.USER,
    },
    userType: {
        type: String,
        enum: userType_enum_1.UserType,
        default: userType_enum_1.UserType.JOB_SEEKER,
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
//# sourceMappingURL=user.schema.js.map