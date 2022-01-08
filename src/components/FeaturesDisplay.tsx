import Feature from './Feature';
import { FeatureType } from '../types';
import { CharacterClass, Race } from '../types';
import { ClassFeatures, RacialFeatures, BackgroundFeatures } from '../queries';
import RenderMap, { MappingFunc } from './RenderMap';
import QueryWrapper from './QueryWrapper';

type Props = {
    characterLevel: number,
    characterClass: CharacterClass,
    characterRace: Race
    characterBackground: string,
};

const FeaturesDisplay = ({characterLevel, characterClass, characterRace, characterBackground }: Props): JSX.Element => {

    const featuresMap: MappingFunc<FeatureType> = (feature, index) => {
        if (feature.level) {
            return (feature.level <= characterLevel) && <Feature key={`${feature.name+index}`} feature={feature}></Feature>
        }
        return <Feature key={`${feature.name+index}`} feature={feature}></Feature>
    }

    return (
        <div style={{height: '50%', overflow: 'scroll'}}>
            <h2>Features</h2>
            <QueryWrapper 
                query={ClassFeatures} 
                variables={{"filter": {"class": {"index": characterClass}}}}
                dataType={['features']}
            >
                <RenderMap mappingFunc={featuresMap} data={{}} />
            </QueryWrapper>
            <QueryWrapper 
                query={RacialFeatures}
                variables={{"filter": {"races": { "index": characterRace}}}}
                dataType={['features']}
            >
                <RenderMap mappingFunc={featuresMap} data={{}} />
            </QueryWrapper>
            <QueryWrapper 
                query={BackgroundFeatures}
                variables={{"filter": { "index": characterBackground}}}
                dataType={['background', 'feature']}
            >
                <RenderMap mappingFunc={featuresMap} data={{}} />
            </QueryWrapper>
        </div>
    )
}

export default FeaturesDisplay;