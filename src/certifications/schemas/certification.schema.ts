import * as mongoose from 'mongoose';

export const CertificationSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true },
);
