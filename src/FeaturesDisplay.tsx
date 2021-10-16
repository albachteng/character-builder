import Feature from './Feature';
import { FeatureType } from './Feature';
import { useQuery, DocumentNode } from '@apollo/client';
import { CharacterClass } from './App';


type Props = {
    characterLevel: number,
    featuresQuery: DocumentNode,
    characterClass: CharacterClass,
    children: any,
};

const FeaturesDisplay = ({characterLevel, featuresQuery, characterClass }: Props): JSX.Element => {
    // TODO really unhappy with this any here
    const { loading, error, data } = useQuery(featuresQuery, {
        variables: {"FilterFindManyFeatureInput": {"class": {"index": characterClass}}}
      });

    return (
        <div style={{height: '50%', overflow: 'scroll'}}>
            {loading && 'Loading...'}
            {error && 'Whoops! Something went wrong!'}
            {data && data.features.map((feature: FeatureType, i: number) => {
                return (feature.level <= characterLevel) && <Feature key={`${feature.name+i}`} featureDetails={feature}></Feature>
            })}
        </div>
    )
}

export default FeaturesDisplay;