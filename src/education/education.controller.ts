import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { EducationService } from './education.service';
import { Education } from './interfaces/education.interface';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  findAll(): Promise<Education[]> {
    return this.educationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Education> {
    return this.educationService.findOne(id);
  }

  @Post()
  create(@Body() createEducationDto: CreateEducationDto): Promise<Education> {
    return this.educationService.create(createEducationDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateEducationDto,
  ): Promise<Education> {
    return this.educationService.update(id, updateEducationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Education> {
    return this.educationService.delete(id);
  }
}
