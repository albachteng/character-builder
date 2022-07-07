import { useState, useEffect } from 'react';
import { CharacterClass, Choice, Race } from '../types';
import useOption from './useOption';
import type { SkillProficiencyFragment_skill$data as Skill } from '../components/SkillsDisplay/__generated__/SkillProficiencyFragment_skill.graphql';

const useSkillProficiencies = (
    backgroundProficiencies: Skill[],
    racialProficiencies: Skill[],
    classProficiencies: Skill[],
    racialProficiencyChoices: Choice<Skill>[],
    classProficienciesChoices: Choice<Skill>[]
) => {

  const choices = [];
  if (racialProficiencyChoices && racialProficiencyChoices?.length) choices.push(...racialProficiencyChoices);
  if (classProficienciesChoices && classProficienciesChoices?.length) choices.push(...classProficienciesChoices);

  const startingProfs = [];
  if (classProficiencies && classProficiencies?.length) startingProfs.push(...classProficiencies);
  if (racialProficiencies && racialProficiencies?.length) startingProfs.push(...racialProficiencies);
  if (backgroundProficiencies && backgroundProficiencies?.length) startingProfs.push(...backgroundProficiencies);

  // must update the choices and get selections before we can set the proficiencies
  const [choicesArray, setChoicesArray] = useState<Choice<Skill>[]>([...choices]);
  const { selections } = useOption(choicesArray);
  const [proficiencies, setProficiencies] = useState<Skill[]>([...startingProfs, ...selections]);

  return {
    proficiencies
  };
};

export default useSkillProficiencies;
