import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
});
