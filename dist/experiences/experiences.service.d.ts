import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Experience } from './interfaces/experience.interface';
export declare class ExperiencesService {
    private readonly experienceModel;
    private readonly profileModel;
    constructor(experienceModel: Model<Experience>, profileModel: Model<Profile>);
    findAll(): Promise<Experience[]>;
    findOne(id: string): Promise<Experience>;
    create(experience: Experience): Promise<Experience>;
    update(id: string, experience: Experience): Promise<Experience>;
    delete(id: string): Promise<Experience>;
}
