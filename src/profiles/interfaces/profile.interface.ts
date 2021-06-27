import { Certification } from 'src/certifications/interfaces/certification.interface';
import { Education } from 'src/education/interfaces/education.interface';
import { Experience } from 'src/experiences/interfaces/experience.interface';
import { Language } from 'src/languages/interfaces/language.interface';
import { Skill } from 'src/skills/interfaces/skill.interface';

export interface Profile {
  id?: string;
  firsrName?: string;
  lastName?: string;
  description?: string;
  profileImage?: string;
  education?: Education[];
  experiences?: Experience[];
  skills?: Skill[];
  certifications?: Certification[];
  languages?: Language[];
  jobs?: string[];
}
