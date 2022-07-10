/* renders skill proficiencies display and handles query for class skill choices */
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment, useLazyLoadQuery } from 'react-relay';
import useSkillProficiencies from '../../hooks/useSkillProficiencies';
import {
  AbilityScoreName, MappingFunc, ZeroToTwenty,
} from '../../types';
import type { AbilityScores } from '../../types/AbilityScores';
import SkillProficiency from './SkillProficiency';
import type { SkillsDisplayFragment_race$key } from './__generated__/SkillsDisplayFragment_race.graphql';
import type { SkillsDisplayFragment_background$key } from './__generated__/SkillsDisplayFragment_background.graphql';
import type { SkillsDisplayFragment_class$key } from './__generated__/SkillsDisplayFragment_class.graphql';
import type { SkillsDisplayQuery } from './__generated__/SkillsDisplayQuery.graphql';

type Props = {
  characterLevel: ZeroToTwenty
  characterStats: AbilityScores
  classRef: SkillsDisplayFragment_class$key
  raceRef: SkillsDisplayFragment_race$key
  backgroundRef: SkillsDisplayFragment_background$key
}

function SkillsDisplay({
  characterStats,
  characterLevel,
  classRef,
  raceRef,
  backgroundRef }: Props) {

  const proficiencyBonus = Math.floor((7 + Number(characterLevel)) / 4);

  const {starting_proficiencies: backgroundProficiencies } = useFragment(
    graphql`fragment SkillsDisplayFragment_background on Background {
      __typename
      starting_proficiencies {
        name
        index
        url
        __typename
      }
    }`, backgroundRef);

  const { proficiencies: classProficiencies, proficiency_choices: classProficienciesChoices} = useFragment(
    graphql`fragment SkillsDisplayFragment_class on Class {
      index
      proficiencies {
        name
        __typename
        index
        url
      }
      proficiency_choices {
        choose
        __typename
        from {
          name
          __typename
          index
          url
        }
      }
    }`, classRef);

  const { proficiencies: racialProficiencies, proficiency_choices: racialProficiencyChoices} = useFragment(
    graphql`fragment SkillsDisplayFragment_race on Race {
      index
      __typename
      proficiencies: starting_proficiencies {
        name
        __typename
        index
        url
      }
      proficiency_choices: starting_proficiency_options {
        choose
        __typename
        from {
          name
          __typename
          index
          url
        }
      }
    }
  `, raceRef)

  const { skills } = useLazyLoadQuery<SkillsDisplayQuery>(
    graphql`query SkillsDisplayQuery {
      skills {
        index
        ...SkillProficiencyFragment_skill
      }
    }`);


  const { proficiencies } = useSkillProficiencies(
    backgroundProficiencies,
    racialProficiencies,
    classProficiencies,
    racialProficiencyChoices,
    classProficienciesChoices
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
        key={skill?.index}
        proficiencyFrom={proficiency[1]}
      />
    );
  };

  const mappedSkills = skills.map((skill, i, allSkills) => {
    const proficiencyIndices = proficiencies.map((prof) => prof?.index?.slice(6))
    const [bool, from] = isProficient(proficiencies, skill);
    console.log(skill?.index)
    return (
      <SkillProficiency
        key={skill?.index}
        skillRef={allSkills[i]}
        characterStats={characterStats}
        characterLevel={characterLevel}
        proficiencies={proficiencies.map((prof) => prof.index?.slice(6))}
      />)
  });

  return (
    <section>
      {mappedSkills}
    </section>
  );
}

export default SkillsDisplay;
