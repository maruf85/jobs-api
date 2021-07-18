import { Period } from '../interfaces/experience.interface';
export declare class BaseExperienceDto {
    readonly jobTitle?: string;
    readonly employmentType?: string;
    readonly companyName?: string;
    readonly startPeriod?: Period;
    readonly endPeriod?: Period;
    readonly currentEmployer?: boolean;
    readonly description?: string;
    readonly profileId: string;
}
