import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './interfaces/language.interface';
import { LanguagesService } from './languages.service';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly languageService: LanguagesService) {}

  @Get()
  findAll(): Promise<Language[]> {
    return this.languageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Language> {
    return this.languageService.findOne(id);
  }

  @Post()
  create(@Body() createLanguageDto: CreateLanguageDto): Promise<Language> {
    return this.languageService.create(createLanguageDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ): Promise<Language> {
    return this.languageService.update(id, updateLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Language> {
    return this.languageService.delete(id);
  }
}
