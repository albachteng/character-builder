import Feature from './Feature';
import { FeatureType } from '../types';
import { CharacterClass, Race } from '../types';
import { ClassFeatures } from '../queries';
import { RacialFeatures } from '../queries';
import QueryMap from './QueryMap';

type Props = {
    characterLevel: number,
    characterClass: CharacterClass,
    characterRace: Race
};



const FeaturesDisplay = ({characterLevel, characterClass, characterRace }: Props): JSX.Element => {

    // const { loading, error, data } = useQuery(FEATURES, {
    //     variables: {"FilterFindManyFeatureInput": {"class": {"index": characterClass}}}
    //   });
    // const { loading, error, data } = useQuery(RACIALFEATURES, {
    //     variables: {"FilterFindManyRaceInput": {"index": characterRace}}
    // })
    const featuresMap = (feature: FeatureType, index: number) => {
        if (feature.level) {
            return (feature.level <= characterLevel) && <Feature key={`${feature.name+index}`} featureDetails={feature}></Feature>
        }
        return <Feature key={`${feature.name+index}`} featureDetails={feature}></Feature>
    }

    

    return (
        <div style={{height: '50%', overflow: 'scroll'}}>
            {/* {data && data.features.map((feature: FeatureType, i: number) => {
                return (feature.level <= characterLevel) && <Feature key={`${feature.name+i}`} featureDetails={feature}></Feature>
            })} */}
            <QueryMap 
                query={ClassFeatures} 
                variables={{"filter": {"class": {"index": characterClass}}}}
                mappingFunc={featuresMap}
                dataType={"features"}/>    
            <QueryMap 
                query={RacialFeatures}
                variables={{"filter": {"races": { "index": characterRace}}}}
                mappingFunc={featuresMap}
                dataType={"features"}
            />
        </div>
    )
}

export default FeaturesDisplay;