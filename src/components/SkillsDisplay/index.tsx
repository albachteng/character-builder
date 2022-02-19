/* renders skill proficiencies display and handles query for class skill choices */
import useSkillProficiencies from '../../hooks/useSkillProficiencies';
import { AllSkills } from '../../queries';
import {
  AbilityScoreName, CharacterClass, MappingFunc, Race, Skill,
} from '../../types';
import type { AbilityScores } from '../../types/AbilityScores';
import QueryWrapper from '../QueryWrapper';
import RenderMap from '../RenderMap';
import SkillProficiency from './SkillProficiency';

type Props = {
  characterClass: CharacterClass;
  characterRace: Race;
  characterStats: AbilityScores;
  proficiencyBonus: number;
  characterBackground: string;
};

function SkillsDisplay({
  characterClass,
  characterStats,
  proficiencyBonus,
  characterRace,
  characterBackground,
}: Props) {
  const { proficiencies } = useSkillProficiencies(
    characterClass,
    characterRace,
    characterBackground,
  );

  const isProficient = (
    proficiencies: Skill[],
    skill: Skill,
  ): [boolean, string | undefined] => {
    for (let i = 0; i < proficiencies.length; i += 1) {
      if (
        proficiencies[i]?.index?.slice(6) === skill.index
      ) {
        return [true, proficiencies[i].__typename];
      }
    }
    return [false, 'undefined'];
  };

  const makeProficienciesArray: MappingFunc<Skill> = (skill, index) => {
    const proficiency = isProficient(proficiencies, skill);
    return (
      <SkillProficiency
        skill={skill}
        stat={characterStats[skill?.ability_score?.name as AbilityScoreName]}
        proficiencyBonus={proficiencyBonus}
        isProficient={proficiency[0]}
        key={`${skill.name}${index}`}
        proficiencyFrom={proficiency[1]}
      />
    );
  };

  return (
    <QueryWrapper query={AllSkills} variables={{}} dataType={['skills']}>
      <RenderMap mappingFunc={makeProficienciesArray} />
    </QueryWrapper>
  );
}

export default SkillsDisplay;
