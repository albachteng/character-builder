import {SkillName} from './SkillName';
import {ability_score} from './ability_score';

export type Skill = {
    name: SkillName,
    ability_score: ability_score
    desc: string[],
    __typename: 'string',
  }