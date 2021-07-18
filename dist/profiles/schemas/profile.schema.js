"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileSchema = void 0;
const mongoose = require("mongoose");
exports.ProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    description: {
        type: String,
    },
    profileImage: {
        type: String,
        default: null,
    },
    education: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Education',
        },
    ],
    experiences: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Experience',
        },
    ],
    skills: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill',
        },
    ],
    certifications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Certification',
        },
    ],
    languages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Language',
        },
    ],
    jobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
        },
    ],
}, { timestamps: true });
//# sourceMappingURL=profile.schema.js.map