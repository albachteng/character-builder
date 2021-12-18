import { AbilityScoreTotal } from './AbilityScoreTotal'
import {ability_score_abbr} from './ability_score'

export type AbilityScore = {
  [key in ability_score_abbr]: AbilityScoreTotal
};