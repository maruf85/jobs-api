import * as mongoose from 'mongoose';
import { UserType } from 'src/constants/userType.enum';
import { Role } from '../../constants/role.enum';

export const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      select: true,
    },
    role: {
      type: String,
      enum: Role,
      default: Role.USER,
    },
    userType: {
      type: String,
      enum: UserType,
      default: UserType.JOB_SEEKER,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
