import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CertificationsService } from './certifications.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';
import { Certification } from './interfaces/certification.interface';

@Controller('certifications')
export class CertificationsController {
  constructor(private readonly certificationService: CertificationsService) {}

  @Get()
  findAll(): Promise<Certification[]> {
    return this.certificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Certification> {
    return this.certificationService.findOne(id);
  }

  @Post()
  create(
    @Body() createCertificationDto: CreateCertificationDto,
  ): Promise<Certification> {
    return this.certificationService.create(createCertificationDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCertificationDto: UpdateCertificationDto,
  ): Promise<Certification> {
    return this.certificationService.update(id, updateCertificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Certification> {
    return this.certificationService.delete(id);
  }
}
