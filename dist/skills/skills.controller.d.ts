import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './interfaces/skill.interface';
import { SkillsService } from './skills.service';
export declare class SkillsController {
    private readonly skillService;
    constructor(skillService: SkillsService);
    findAll(): Promise<Skill[]>;
    findOne(id: string): Promise<Skill>;
    create(createSkilleDto: CreateSkillDto): Promise<Skill>;
    update(id: string, updateSkillDto: UpdateSkillDto): Promise<Skill>;
    remove(id: string): Promise<Skill>;
}
