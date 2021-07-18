"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose = require("mongoose");
exports.CategorySchema = new mongoose.Schema({
    name: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,
});
//# sourceMappingURL=category.schema.js.map