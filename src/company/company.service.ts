import {
  BadRequestException,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Company } from './interfaces/company.interface';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel('Company')
    private readonly companyModel: Model<Company>,
    @Inject(forwardRef(() => CloudinaryService))
    private cloudinaryService: CloudinaryService,
  ) {}

  async findAll(): Promise<Company[]> {
    try {
      return await this.companyModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<Company> {
    try {
      return await this.companyModel.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(company: Company): Promise<Company> {
    try {
      const newCompany = new this.companyModel({
        ...company,
      });
      return await newCompany.save();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, company: Company): Promise<Company> {
    try {
      return await this.companyModel.findByIdAndUpdate(
        id,
        { ...company },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async updateProfileImage(
    id: string,
    imageUrl: string,
    company?: Company,
  ): Promise<Company> {
    try {
      return await this.companyModel.findByIdAndUpdate(
        id,
        { ...company, profileImage: imageUrl },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async uploadImageToCloudinary(file: Express.Multer.File, companyId: string) {
    try {
      return await this.cloudinaryService.uploadCompanyProfileImage(
        file,
        companyId,
      );
    } catch (error) {
      throw new BadRequestException(`${error.message}`, 'Invalid file type.');
    }
  }
}
