import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './interfaces/language.interface';
import { LanguagesService } from './languages.service';
export declare class LanguagesController {
    private readonly languageService;
    constructor(languageService: LanguagesService);
    findAll(): Promise<Language[]>;
    findOne(id: string): Promise<Language>;
    create(createLanguageDto: CreateLanguageDto): Promise<Language>;
    update(id: string, updateLanguageDto: UpdateLanguageDto): Promise<Language>;
    remove(id: string): Promise<Language>;
}
