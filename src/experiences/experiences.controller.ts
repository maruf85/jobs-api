import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { ExperiencesService } from './experiences.service';
import { Experience } from './interfaces/experience.interface';

@Controller('experiences')
export class ExperiencesController {
  constructor(private readonly experienceService: ExperiencesService) {}

  @Get()
  findAll(): Promise<Experience[]> {
    return this.experienceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Experience> {
    return this.experienceService.findOne(id);
  }

  @Post()
  create(
    @Body() createExperienceDto: CreateExperienceDto,
  ): Promise<Experience> {
    return this.experienceService.create(createExperienceDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ): Promise<Experience> {
    return this.experienceService.update(id, updateExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Experience> {
    return this.experienceService.delete(id);
  }
}
