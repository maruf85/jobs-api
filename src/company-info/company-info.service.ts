import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from 'src/company/interfaces/company.interface';
import { CompanyInfo } from './interfaces/company-info.interface';

@Injectable()
export class CompanyInfoService {
  constructor(
    @InjectModel('CompanyInfo')
    private readonly companyInfoModel: Model<CompanyInfo>,
    @InjectModel('Company')
    private readonly companyModel: Model<Company>,
  ) {}

  async findAll(): Promise<CompanyInfo[]> {
    try {
      return await this.companyInfoModel.find();
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<CompanyInfo> {
    try {
      return await this.companyInfoModel.findOne({ _id: id });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async create(companyInfo: CompanyInfo): Promise<CompanyInfo> {
    try {
      const company = await this.companyModel.findOne({
        _id: companyInfo.companyId,
      });

      const newCompanyInfo = new this.companyInfoModel({
        ...companyInfo,
      });

      const _companyInfo = await newCompanyInfo.save();

      if (company) {
        company.companyInfo = newCompanyInfo;
        await company.save();
      }

      return _companyInfo;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, companyInfo: CompanyInfo): Promise<CompanyInfo> {
    try {
      return await this.companyInfoModel.findByIdAndUpdate(
        id,
        { ...companyInfo },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<CompanyInfo> {
    try {
      const companyInfo = await this.companyInfoModel.findByIdAndRemove(id);
      const company = await this.companyModel.findOne({
        _id: companyInfo.companyId,
      });

      if (company) {
        await this.companyModel.updateOne({
          $unset: { companyInfo: companyInfo._id },
        });
      }
      return companyInfo;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}
