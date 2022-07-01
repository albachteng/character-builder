import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import {
  CharacterProficiencies
} from '../queries';
import { CharacterClass, Choice, Race, Skill } from '../types';
import { findArray } from '../utilities/findArray';
import useOption from './useOption';

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

  // // when we have the choice arrays, combine them so that useOption can update selections
  // useEffect(() => {
  //   if (
  //     !characterProficiencies.loading
  //     && characterProficiencies.data !== null
  //   ) {
  //     const classArray =
  //       findArray(characterProficiencies.data, [
  //         'class',
  //         'proficiency_choices'
  //       ]) || [];
  //     const raceArray =
  //       [
  //         findArray(characterProficiencies.data, ['race', 'proficiency_choices'])
  //       ] || [];
  //     setChoicesArray([...classArray, ...raceArray]);
  //   }
  // }, [
  //   characterProficiencies.data,
  //   characterClass,
  //   characterRace
  // ]);

  // // when we have selections, combine them with racial starting proficiencies and background proficiencies
  // useEffect(() => {
  //   selections &&
  //     characterProficiencies.data &&
  //     setProficiencies([
  //       ...selections,
  //       ...findArray(characterProficiencies.data, [
  //         'race',
  //         'proficiencies'
  //       ]),
  //       ...findArray(characterProficiencies.data, [
  //         'background',
  //         'proficiencies'
  //       ])
  //     ]);
  // }, [
  //   selections,
  //   characterProficiencies.data
  // ]);

  return {
    proficiencies
  };
};

export default useSkillProficiencies;
