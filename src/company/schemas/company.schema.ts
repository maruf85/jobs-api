import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true },
);