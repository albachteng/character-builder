import { useMemo } from 'react';
import { getRandom } from '../../hooks/useCharacter';
import { ClassFeatures, RacialFeatures, BackgroundFeatures } from '../../queries';
import type { Feature as FeatureType } from '../../types';
import { MappingFunc } from '../../types';
import CharacterContext from '../CharacterContext';
import { useContext } from 'react';
import QueryRenderer from '../QueryRenderer';
import Feature from './Feature';
import { makeUniqueId } from '@apollo/client/utilities';
import RenderMap from '../RenderMap';

type Props = {
  data: any
}
function FeaturesDisplay({data}: Props): JSX.Element {

  const { characterRace, characterClass, characterBackground } = useContext(CharacterContext);

  // function provideFeaturesFilter() {
  //   const featuresFilter: [undefined | string, undefined | string] = [undefined, undefined];
  //   if (characterRace === 'dragonborn') {
  //     const draconicAncestryArray: string[] = [ "draconic-ancestry" , "draconic-ancestry-blue" , "draconic-ancestry-red" , "breath-weapon" , "draconic-ancestry-brass" , "draconic-ancestry-black" , "draconic-ancestry-bronze" , "draconic-ancestry-silver" , "draconic-ancestry-white" , "damage-resistance" , "draconic-ancestry-copper" , "draconic-ancestry-gold" , "draconic-ancestry-green"];
  //     const ancestry = getRandom(draconicAncestryArray);
  //     featuresFilter[0] = 'draconic-ancestry-';
  //     featuresFilter[1] = ancestry;
  //   }
  //   if (characterClass === 'fighter') {
  //     const fightingStyleArray = ['fighter-fighting-style-archery', 'fighter-fighting-style-dueling', 'fighter-fighting-style-defense', 'fighter-fighting-style-two-weapon-fighting', 'fighter-fighting-style-protection', 'fighter-fighting-style-great-weapon-fighting', ]
  //     const fightingStyle = getRandom(fightingStyleArray);
  //     featuresFilter[0] = 'fighter-fighting-style-';
  //     featuresFilter[1] = fightingStyle;
  //   }
  //   if (characterClass === 'warlock') {
  //     const invocationsArray = ['eldritch-invocation-gaze-of-two-minds', 'eldritch-invocation-fiendish-vigor', 'eldritch-invocation-misty-visions', 'eldritch-invocation-voice-of-the-chain-master', 'eldritch-invocation-armor-of-shadows', 'eldritch-invocation-beguiling-influence', 'eldritch-invocation-book-of-ancient-secrets', 'eldritch-invocation-eyes-of-the-rune-keeper', 'eldritch-invocation-eldritch-spear', 'eldritch-invocation-repelling-blast', 'eldritch-invocation-beast-speech', 'eldritch-invocation-devils-sight', 'eldritch-invocation-agonizing-blast', 'eldritch-invocation-eldritch-sight', 'eldritch-invocation-mask-of-many-faces', 'eldritch-invocation-thief-of-five-fates'];
  //     const invocationChoice = getRandom(invocationsArray);
  //     featuresFilter[0] = 'eldritch-invocation-';
  //     featuresFilter[1] = invocationChoice;
  //   }
  //
  //   return featuresFilter;
  // }

  // const [selectionSearchTerm, selectionIndex] = useMemo(() => provideFeaturesFilter(), [characterClass, characterRace]);

  const featuresMap: MappingFunc<FeatureType> = (feature, index) => {
    console.log(feature, 'in mapping func') // why is this an array
    // const [selectionSearchTerm, selectionIndex] = provideFeaturesFilter();
    return (
      <Feature
        key={`Feature-${feature?.index}`}
        feature={feature}
        // selectionIndex={selectionIndex}
        // selectionSearchTerm={selectionSearchTerm}
      />
    );
  };

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>Features</h2>
      {/* <QueryRenderer */}
      {/*   query={ClassFeatures} */}
      {/*   variables={{ filter: { class: { index: characterClass } } }} */}
      {/*   dataType={['features']} */}
      {/*   mappingFunc={featuresMap} */}
      {/* /> */}
      <RenderMap
        mappingFunc={featuresMap}
        data={data.map((level: any) => level?.features).flat()}
      />
      {/* <QueryRenderer */}
      {/*   query={RacialFeatures} */}
      {/*   variables={{ filter: { races: { index: characterRace } } }} */}
      {/*   dataType={['features']} */}
      {/*   mappingFunc={featuresMap} */}
      {/* /> */}
      {/* <QueryRenderer */}
      {/*   query={BackgroundFeatures} */}
      {/*   variables={{ filter: { index: characterBackground } }} */}
      {/*   dataType={['background', 'feature']} */}
      {/*   mappingFunc={featuresMap} */}
      {/* /> */}
    </div>
  );
}

export default FeaturesDisplay;
