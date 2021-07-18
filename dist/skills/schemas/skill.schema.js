"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillSchema = void 0;
const mongoose = require("mongoose");
exports.SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile',
        required: true,
    },
}, { timestamps: true });
//# sourceMappingURL=skill.schema.js.map