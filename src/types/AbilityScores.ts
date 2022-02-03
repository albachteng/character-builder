import { ZeroToTwenty } from './ZeroToTwenty'
import type { AbilityScoreName } from './AbilityScoreName'

export type AbilityScores = {
  [key in AbilityScoreName]: ZeroToTwenty
};