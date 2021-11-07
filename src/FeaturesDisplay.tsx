import Feature from './Feature';
import { FeatureType } from './types';
import { useQuery } from '@apollo/client';
import { CharacterClass } from './types';
import { FEATURES } from './queries/queries';

type Props = {
    characterLevel: number,
    characterClass: CharacterClass,
};



const FeaturesDisplay = ({characterLevel, characterClass }: Props): JSX.Element => {
    const { loading, error, data } = useQuery(FEATURES, {
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