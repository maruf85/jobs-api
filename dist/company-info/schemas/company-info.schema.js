"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyInfoSchema = void 0;
const mongoose = require("mongoose");
exports.CompanyInfoSchema = new mongoose.Schema({
    websiteUrl: {
        type: String,
    },
    establishmentYear: {
        type: Number,
    },
    companySize: {
        type: String,
    },
    companyType: {
        type: String,
    },
    headquarter: {
        type: String,
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
}, { timestamps: true });
//# sourceMappingURL=company-info.schema.js.map