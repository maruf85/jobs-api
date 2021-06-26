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
  findAll(): Promise<CompanyInfo[]> {
    return this.companyInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CompanyInfo> {
    return this.companyInfoService.findOne(id);
  }

  @Post()
  create(
    @Body() createCompanyInfoDto: CreateCompanyInfoDto,
  ): Promise<CompanyInfo> {
    return this.companyInfoService.create(createCompanyInfoDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyInfoDto: UpdateCompanyInfoDto,
  ): Promise<CompanyInfo> {
    return this.companyInfoService.update(id, updateCompanyInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<CompanyInfo> {
    return this.companyInfoService.delete(id);
  }
}
