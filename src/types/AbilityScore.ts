import { AbilityScoreTotal } from './AbilityScoreTotal'
import type { ability_score_abbr } from './ability_score'

export type AbilityScore = {
  [key in ability_score_abbr]: AbilityScoreTotal
};