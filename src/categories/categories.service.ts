import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './interfaces/category.interface';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    try {
      return await this.categoryModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoryModel.findOne({ _id: id });
  }

  async create(category: Category): Promise<Category> {
    const newCategory = new this.categoryModel({
      ...category,
      createdAt: new Date(),
    });
    return await newCategory.save();
  }

  async update(id: string, category: Category): Promise<Category> {
    return await this.categoryModel.findByIdAndUpdate(
      id,
      { ...category, updatedAt: new Date() },
      {
        new: true,
      },
    );
  }

  async delete(id: string): Promise<Category> {
    return await this.categoryModel.findByIdAndRemove(id);
  }
}
