"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySchema = void 0;
const mongoose = require("mongoose");
exports.CompanySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    businessStream: {
        type: String,
    },
    profileImage: {
        type: String,
        default: null,
    },
    companyInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyInfo',
        default: null,
    },
    jobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
        },
    ],
}, { timestamps: true });
//# sourceMappingURL=company.schema.js.map