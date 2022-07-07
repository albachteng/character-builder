import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import useOnClickDescription from "../../hooks/useOnClickDescription";
import type { TraitFragment_trait$key } from './__generated__/TraitFragment_trait.graphql';

type Props = {
  traitRef: TraitFragment_trait$key
};

function Trait({ traitRef }: Props) {

  const trait = useFragment(
    graphql`fragment TraitFragment_trait on Trait {
      name
      index
      __typename
      desc
    }`, traitRef);

  console.log({trait})
  const { description, toggleDescription } = useOnClickDescription(trait);

  return (
    <>
      {(
        <div>
          <p onClick={toggleDescription}>
            {trait?.name}
            {` | From Racial Traits`}
          </p>
          {description}
        </div>
      )}
    </>
  );
}

export default Trait;
