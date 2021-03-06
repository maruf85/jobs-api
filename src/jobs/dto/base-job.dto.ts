import { IsNotEmpty } from 'class-validator';
import { JobType } from 'src/constants/jobType.enum';
import { SkillLevel } from 'src/constants/skillLevel.enum';

export class BaseJobDto {
  @IsNotEmpty()
  readonly title: string;

  readonly description?: string;

  readonly deadline?: Date;

  readonly jobType?: JobType;

  readonly skillLevel?: SkillLevel;

  readonly salary?: string;

  readonly isRemote?: boolean;

  readonly isActive: boolean;

  readonly isPublished: boolean;

  @IsNotEmpty()
  readonly companyId: string;
}
