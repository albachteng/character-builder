import Feature from './Feature';
import { FeatureType } from '../types';
import { CharacterClass, Race } from '../types';
import { ClassFeatures, RacialFeatures, BackgroundFeatures } from '../queries';
import QueryMap from './QueryMap';

type Props = {
    characterLevel: number,
    characterClass: CharacterClass,
    characterRace: Race
    characterBackground: string,
};

const FeaturesDisplay = ({characterLevel, characterClass, characterRace, characterBackground }: Props): JSX.Element => {

    const featuresMap = (feature: FeatureType, index: number) => {
        if (feature.level) {
            return (feature.level <= characterLevel) && <Feature key={`${feature.name+index}`} featureDetails={feature}></Feature>
        }
        return <Feature key={`${feature.name+index}`} featureDetails={feature}></Feature>
    }

    return (
        <div style={{height: '50%', overflow: 'scroll'}}>
            <h2>Features</h2>
            <QueryMap 
                query={ClassFeatures} 
                variables={{"filter": {"class": {"index": characterClass}}}}
                mappingFunc={featuresMap}
                dataType={['features']}/>    
            <QueryMap 
                query={RacialFeatures}
                variables={{"filter": {"races": { "index": characterRace}}}}
                mappingFunc={featuresMap}
                dataType={['features']}/> 
            <QueryMap 
                query={BackgroundFeatures}
                variables={{"filter": { "index": characterBackground}}}
                mappingFunc={featuresMap}
                dataType={['background', 'feature']}/> 
        </div>
    )
}

export default FeaturesDisplay;