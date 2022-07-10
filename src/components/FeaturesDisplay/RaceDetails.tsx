
import { graphql } from 'babel-plugin-relay/macro';
import { useState } from 'react';
import { useFragment } from 'react-relay';
import type { RaceDetailsFragment_race$key } from './__generated__/RaceDetailsFragment_race.graphql';
import { useClickOutside } from '@mantine/hooks';
import OnClickDescription from './OnClickDescription';

type Props = {
  raceRef: RaceDetailsFragment_race$key
}

function RaceDetails({raceRef}: Props) {

  const { language_desc, size_description, alignment, age } = useFragment(graphql`
    fragment RaceDetailsFragment_race on Race {
      language_desc
      size_description
      alignment
      age
    }`, raceRef);

  return (
    <>
      <OnClickDescription label={"Language"}>
        <p>{language_desc}</p>
      </OnClickDescription>
      <OnClickDescription label={"Size"}>
        <p>{size_description}</p>
      </OnClickDescription>
      <OnClickDescription label={"Alignment"}>
        <p>{alignment}</p>
      </OnClickDescription>
      <OnClickDescription label={"Age"}>
        <p>{age}</p>
      </OnClickDescription>
    </>
  )
}

export default RaceDetails;
