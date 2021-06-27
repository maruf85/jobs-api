import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompanyInfoService } from './company-info.service';
import { CreateCompanyInfoDto } from './dto/create-company-info.dto';
import { UpdateCompanyInfoDto } from './dto/update-company-info.dto';
import { CompanyInfo } from './interfaces/company-info.interface';

@Controller('company-info')
export class CompanyInfoController {
  constructor(private readonly companyInfoService: CompanyInfoService) {}

  @Get()
  public async findAll(): Promise<CompanyInfo[]> {
    return await this.companyInfoService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<CompanyInfo> {
    return await this.companyInfoService.findOne(id);
  }

  @Post()
  public async create(
    @Body() createCompanyInfoDto: CreateCompanyInfoDto,
  ): Promise<CompanyInfo> {
    return await this.companyInfoService.create(createCompanyInfoDto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateCompanyInfoDto: UpdateCompanyInfoDto,
  ): Promise<CompanyInfo> {
    return await this.companyInfoService.update(id, updateCompanyInfoDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<CompanyInfo> {
    return await this.companyInfoService.delete(id);
  }
}
