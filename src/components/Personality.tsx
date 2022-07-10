import { Background, MappingFunc } from "../types";
import withUseOption from "./withUseOption";
import RenderMap from "./RenderMap";
import QueryWrapper from "./QueryWrapper";
import { PersonalityByBackground } from "../queries";
import type { PersonalityFragment_background$key } from './__generated__/PersonalityFragment_background.graphql';
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

interface Props {
  backgroundRef: PersonalityFragment_background$key
  characterBackground: Background
}

function Personality({ backgroundRef, characterBackground = 'acolyte'}: Props) {

  const { personality_traits, ideals, bonds, flaws } = useFragment(
    graphql`fragment PersonalityFragment_background on Background {
      personality_traits {
        __typename
        choose
        from
      }
      ideals {
        choose
        from {
          desc
          alignments {
            name
          }
        }
      }
      bonds {
        choose
        from
      }
      flaws {
        choose
        from
      }
    }`, backgroundRef);

    const personalityMap: MappingFunc<string> = (trait, index) => {
        if (trait) {
        return (
            <p key={`${trait}${index}`}>
            Trait:
            {trait}
            </p>
        );
        }
    };

    const idealsMap: MappingFunc<any> = (ideal, index) => {
        if (ideal) {
        return (
            <p key={`${ideal}${index}`}>
            Ideal:
            {ideal?.desc}
            </p>
        );
        }
    };

    const RenderMapWithOption = withUseOption(RenderMap);

    return (
        <div>
          <RenderMapWithOption data={personality_traits} mappingFunc={personalityMap}/>
          <RenderMapWithOption data={ideals} mappingFunc={idealsMap}/>
          <RenderMapWithOption data={bonds} mappingFunc={personalityMap}/>
          <RenderMapWithOption data={flaws} mappingFunc={personalityMap}/>
        </div>
        )
}

export default Personality;
