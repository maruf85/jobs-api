import * as mongoose from 'mongoose';

export const EducationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
    },
    degree: {
      type: String,
    },
    fieldOfStudy: {
      type: String,
    },
    startYear: {
      type: Number,
    },
    endYear: {
      type: Number,
    },
    grade: {
      type: String,
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
