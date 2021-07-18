"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceSchema = void 0;
const mongoose = require("mongoose");
exports.ExperienceSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
    },
    employmentType: {
        type: String,
    },
    companyName: {
        type: String,
    },
    location: {
        type: String,
    },
    startPeriod: {
        month: { type: String },
        year: { type: Number },
    },
    endPeriod: {
        month: { type: String },
        year: { type: String },
    },
    currentEmployer: {
        type: Boolean,
    },
    description: {
        type: String,
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true,
    },
}, { timestamps: true });
//# sourceMappingURL=experience.schema.js.map