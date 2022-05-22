import { getRandom } from '../../hooks/useCharacter';
import { ClassFeatures, RacialFeatures, BackgroundFeatures } from '../../queries';
import type { Feature as FeatureType, ZeroToTwenty } from '../../types';
import { CharacterClass, Race, MappingFunc } from '../../types';
import { Background } from '../../types/Background';
import QueryRenderer from '../QueryRenderer';
import Feature from './Feature';

type Props = {
  characterLevel: ZeroToTwenty;
  characterClass: CharacterClass;
  characterRace: Race;
  characterBackground: Background;
};


function FeaturesDisplay({
  characterLevel,
  characterClass,
  characterRace,
  characterBackground,
}: Props): JSX.Element {

  function provideFeaturesFilter() {  
    if (characterRace === 'dragonborn') {
      const draconicAncestryArray = [ "draconic-ancestry" , "draconic-ancestry-blue" , "draconic-ancestry-red" , "breath-weapon" , "draconic-ancestry-brass" , "draconic-ancestry-black" , "draconic-ancestry-bronze" , "draconic-ancestry-silver" , "draconic-ancestry-white" , "damage-resistance" , "draconic-ancestry-copper" , "draconic-ancestry-gold" , "draconic-ancestry-green"];
      const ancestry = getRandom(draconicAncestryArray);
      return ['draconic-ancestry', ancestry];
    }
    // if (characterClass === 'fighter')
    else return [undefined, undefined]
  }

  const featuresMap: MappingFunc<FeatureType> = (feature, index) => {
    const [selectionSearchTerm, selectionIndex] = provideFeaturesFilter();
    if (feature?.level) {
      return (
        feature?.level <= characterLevel && (
          <Feature key={`Feature-${feature?.index}`} feature={feature} selectionSearchTerm={selectionSearchTerm} selectionIndex={selectionIndex} />
        )
      );
    }
    return (
      <Feature key={`Feature-${feature?.index}`} feature={feature} selectionIndex={selectionIndex} selectionSearchTerm={selectionSearchTerm}/>
    );
  };

  return (
    <div style={{ height: '50%', overflow: 'scroll' }}>
      <h2>Features</h2>
      <QueryRenderer
        query={ClassFeatures}
        variables={{ filter: { class: { index: characterClass } } }}
        dataType={['features']}
        mappingFunc={featuresMap}
      />
      <QueryRenderer
        query={RacialFeatures}
        variables={{ filter: { races: { index: characterRace } } }}
        dataType={['features']}
        mappingFunc={featuresMap}
      />
      <QueryRenderer
        query={BackgroundFeatures}
        variables={{ filter: { index: characterBackground } }}
        dataType={['background', 'feature']}
        mappingFunc={featuresMap}
      />
    </div>
  );
}

export default FeaturesDisplay;
