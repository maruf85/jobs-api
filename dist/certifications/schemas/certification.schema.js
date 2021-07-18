"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificationSchema = void 0;
const mongoose = require("mongoose");
exports.CertificationSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    issuer: {
        type: String,
    },
    issueDate: {
        day: { type: String },
        month: { type: String },
        year: { type: Number },
    },
    credentialId: {
        type: String,
    },
    credentialUrl: {
        type: String,
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true,
    },
}, { timestamps: true });
//# sourceMappingURL=certification.schema.js.map