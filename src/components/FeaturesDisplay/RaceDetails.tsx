
import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import type { RaceDetailsFragment_race$key } from './__generated__/RaceDetailsFragment_race.graphql';

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
      <p>{language_desc}</p>
      <p>{size_description}</p>
      <p>{alignment}</p>
      <p>{age}</p>
    </>
  )
}

export default RaceDetails;
