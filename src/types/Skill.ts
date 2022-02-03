import { SkillName } from './SkillName';
import { AbilityScoreName, AbilityScoreNameObject } from './AbilityScoreName';
import { SkillIndex } from './SkillIndex';
import { AbilityScores } from '.';

export type Skill = {
  name: SkillName;
  index: SkillIndex;
  ability_score: AbilityScoreNameObject;
  desc: string[];
  url?: string;
  __typename?: string;
};
