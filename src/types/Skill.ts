import {SkillName} from './SkillName';
import {ability_score} from './ability_score';
import { SkillIndex } from './SkillIndex';

export type Skill = {
    name: SkillName,
    index: SkillIndex,
    ability_score: ability_score
    desc: string[],
    url?: string,
    __typename?: string,
  }