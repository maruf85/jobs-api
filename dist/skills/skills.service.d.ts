import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Skill } from './interfaces/skill.interface';
export declare class SkillsService {
    private readonly skillModel;
    private readonly profileModel;
    constructor(skillModel: Model<Skill>, profileModel: Model<Profile>);
    findAll(): Promise<Skill[]>;
    findOne(id: string): Promise<Skill>;
    create(skill: Skill): Promise<Skill>;
    update(id: string, skill: Skill): Promise<Skill>;
    delete(id: string): Promise<Skill>;
}
