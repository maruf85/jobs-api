import { Model } from 'mongoose';
import { Profile } from 'src/profiles/interfaces/profile.interface';
import { Education } from './interfaces/education.interface';
export declare class EducationService {
    private readonly educationModel;
    private readonly profileModel;
    constructor(educationModel: Model<Education>, profileModel: Model<Profile>);
    findAll(): Promise<Education[]>;
    findOne(id: string): Promise<Education>;
    create(education: Education): Promise<any>;
    update(id: string, education: Education): Promise<Education>;
    delete(id: string): Promise<Education>;
}
