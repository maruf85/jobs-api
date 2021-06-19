import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    description: {
      type: String,
    },
    profileImage: {
      type: String,
      default: null,
    },
    education: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Education',
      },
    ],
    experiences: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experience',
      },
    ],
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
      },
    ],
    certifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Certification',
      },
    ],
  },
  { timestamps: true },
);
