import { BaseCertificationDto } from 'src/certifications/dto/base-certification.dto';
import { BaseEducationDto } from 'src/education/dto/base-education.dto';
import { BaseExperienceDto } from 'src/experiences/dto/base-experience.dto';
import { BaseLanguageDto } from 'src/languages/dto/base-language.dto';
import { BaseSkillDto } from 'src/skills/dto/base-skill.dto';

export class BaseProfileDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly description?: string;
  readonly profileImage?: string;
  readonly education?: BaseEducationDto[];
  readonly experiences?: BaseExperienceDto[];
  readonly skills?: BaseSkillDto[];
  readonly certifications?: BaseCertificationDto[];
  readonly languages?: BaseLanguageDto[];
}
