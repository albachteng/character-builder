import Feature from './Feature';
import type { Feature as FeatureType, ZeroToTwenty } from '../../types';
import { CharacterClass, Race, MappingFunc } from '../../types';
import { ClassFeatures, RacialFeatures, BackgroundFeatures } from '../../queries';
import { Background } from '../../types/Background';
import QueryRenderer from '../QueryRenderer';

type Props = {
  characterLevel: ZeroToTwenty;
  characterClass: CharacterClass;
  characterRace: Race;
  characterBackground: Background;
};

const FeaturesDisplay = ({
  characterLevel,
  characterClass,
  characterRace,
  characterBackground
}: Props): JSX.Element => {
  const featuresMap: MappingFunc<FeatureType> = (feature, index) => {
    if (feature?.level) {
      return (
        feature?.level <= characterLevel && (
          <Feature key={`Feature-${feature?.index}`} feature={feature}></Feature>
        )
      );
    }
    return (
      <Feature key={`Feature-${feature?.index}`} feature={feature}></Feature>
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
      mappingFunc={featuresMap}/> 
    </div>
  );
};

export default FeaturesDisplay;
