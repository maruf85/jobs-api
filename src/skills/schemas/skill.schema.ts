import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
      required: true,
    },
  },
  { timestamps: true },
);
