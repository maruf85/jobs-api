import * as mongoose from 'mongoose';

export const CompanyInfoSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true },
);
