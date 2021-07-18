"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const cloudinary_constant_1 = require("../constants/cloudinary.constant");
exports.Cloudinary = {
    provide: cloudinary_constant_1.CLOUDINARY,
    useFactory: () => {
        return cloudinary_1.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    },
};
//# sourceMappingURL=cloudinary.js.map