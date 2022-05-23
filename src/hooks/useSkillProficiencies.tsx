import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import {
  CharacterProficiencies
} from '../queries';
import { CharacterClass, Choice, Race, Skill } from '../types';
import { findArray } from '../utilities/findArray';
import useOption from './useOption';

const useSkillProficiencies = (
  characterClass: CharacterClass,
  characterRace: Race,
  characterBackground: string
) => {

  const characterProficiencies = useQuery(CharacterProficiencies, {
    variables: {
      "background": {
        "index": characterBackground
      },
      "race": {
        "index": characterRace
      },
      "class": {
        "index": characterClass
      }
    }}
   );

  // must update the choices and get selections before we can set the proficiencies
  const [choicesArray, setChoicesArray] = useState<Choice<Skill>[]>([]);
  const { selections } = useOption(choicesArray);
  const [proficiencies, setProficiencies] = useState<Skill[]>([]);

  // when we have the choice arrays, combine them so that useOption can update selections
  useEffect(() => {
    if (
      !characterProficiencies.loading
      && characterProficiencies.data !== null
    ) {
      const classArray =
        findArray(characterProficiencies.data, [
          'class',
          'proficiency_choices'
        ]) || [];
      const raceArray =
        [
          findArray(characterProficiencies.data, ['race', 'proficiency_choices'])
        ] || [];
      setChoicesArray([...classArray, ...raceArray]);
    }
  }, [
    characterProficiencies.data,
    characterClass,
    characterRace
  ]);

  // when we have selections, combine them with racial starting proficiencies and background proficiencies
  useEffect(() => {
    selections &&
      characterProficiencies.data &&
      setProficiencies([
        ...selections,
        ...findArray(characterProficiencies.data, [
          'race',
          'proficiencies'
        ]),
        ...findArray(characterProficiencies.data, [
          'background',
          'proficiencies'
        ])
      ]);
  }, [
    selections,
    characterProficiencies.data
  ]);

  return {
    proficiencies
  };
};

export default useSkillProficiencies;
