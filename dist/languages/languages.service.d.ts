import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Language } from './interfaces/language.interface';
export declare class LanguagesService {
    private readonly languageModel;
    private readonly profileModel;
    constructor(languageModel: Model<Language>, profileModel: Model<Profile>);
    findAll(): Promise<Language[]>;
    findOne(id: string): Promise<Language>;
    create(language: Language): Promise<Language>;
    update(id: string, language: Language): Promise<Language>;
    delete(id: string): Promise<Language>;
}
