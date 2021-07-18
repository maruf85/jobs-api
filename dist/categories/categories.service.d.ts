import { Model } from 'mongoose';
import { Category } from './interfaces/category.interface';
export declare class CategoriesService {
    private readonly categoryModel;
    constructor(categoryModel: Model<Category>);
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    create(category: Category): Promise<Category>;
    update(id: string, category: Category): Promise<Category>;
    delete(id: string): Promise<Category>;
}
