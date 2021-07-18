import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { ExperiencesService } from './experiences.service';
import { Experience } from './interfaces/experience.interface';
export declare class ExperiencesController {
    private readonly experienceService;
    constructor(experienceService: ExperiencesService);
    findAll(): Promise<Experience[]>;
    findOne(id: string): Promise<Experience>;
    create(createExperienceDto: CreateExperienceDto): Promise<Experience>;
    update(id: string, updateExperienceDto: UpdateExperienceDto): Promise<Experience>;
    remove(id: string): Promise<Experience>;
}
