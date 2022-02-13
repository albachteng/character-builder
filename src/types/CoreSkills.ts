import { Skill } from '.';
import { SkillIndex } from './SkillIndex';

export type CoreSkills = {
  [k in SkillIndex]: Skill;
};
