import { Education } from 'src/education/interfaces/education.interface';
import { Experience } from 'src/experiences/interfaces/experience.interface';
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
}
