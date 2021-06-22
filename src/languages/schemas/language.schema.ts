import * as mongoose from 'mongoose';

export const LanguageSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true },
);
