import * as mongoose from 'mongoose';

export const ExperienceSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
    },
    employmentType: {
      type: String,
    },
    companyName: {
      type: String,
    },
    location: {
      type: String,
    },
    startPeriod: {
      month: { type: String },
      year: { type: Number },
    },
    endPeriod: {
      month: { type: String },
      year: { type: String },
    },
    currentEmployer: {
      type: Boolean,
    },
    description: {
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
