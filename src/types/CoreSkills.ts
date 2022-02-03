import { Skill } from './Skill';
import { SkillIndex } from './SkillIndex';

export type CoreSkills = {
  [k in SkillIndex]: Skill;
};
