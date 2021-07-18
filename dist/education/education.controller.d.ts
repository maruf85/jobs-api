import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { EducationService } from './education.service';
import { Education } from './interfaces/education.interface';
export declare class EducationController {
    private readonly educationService;
    constructor(educationService: EducationService);
    findAll(): Promise<Education[]>;
    findOne(id: string): Promise<Education>;
    create(createEducationDto: CreateEducationDto): Promise<Education>;
    update(id: string, updateEducationDto: UpdateEducationDto): Promise<Education>;
    remove(id: string): Promise<Education>;
}
