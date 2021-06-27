import { IsNotEmpty, IsString } from 'class-validator';
import { JobType } from 'src/constants/jobType.enum';
import { SkillLevel } from 'src/constants/skillLevel.enum';

export class BaseJobDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description?: string;

  readonly deadline?: Date;

  readonly jobType?: JobType;

  readonly skillLevel?: SkillLevel;

  @IsString()
  readonly salary?: string;

  readonly isRemote?: boolean;

  @IsNotEmpty()
  readonly isActive: boolean;

  @IsNotEmpty()
  readonly isPublished: boolean;

  @IsString()
  @IsNotEmpty()
  readonly companyId: string;
}
