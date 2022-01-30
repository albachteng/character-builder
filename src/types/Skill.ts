import {SkillName} from './SkillName';
import { AbilityScoreName } from './AbilityScoreName';
import { SkillIndex } from './SkillIndex';

export type Skill = {
    name: SkillName,
    index: SkillIndex,
    ability_score: AbilityScoreName
    desc: string[],
    url?: string,
    __typename?: string,
  }