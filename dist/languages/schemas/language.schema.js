"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageSchema = void 0;
const mongoose = require("mongoose");
exports.LanguageSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    proficiency: {
        type: String,
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true,
    },
}, { timestamps: true });
//# sourceMappingURL=language.schema.js.map