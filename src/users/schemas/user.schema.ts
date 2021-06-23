import * as mongoose from 'mongoose';
import { UserType } from 'src/constants/userType.enum';
import { Role } from '../../constants/role.enum';

export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
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
      enum: Role,
      default: UserType.JOB_SEEKER,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile',
    },
  },
  { timestamps: true },
);
