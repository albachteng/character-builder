import { GraphQLTaggedNode, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import Feature from './Feature';
import {FeatureType} from './Feature';


type Props = {
    characterLevel: number,
    featuresQuery: GraphQLTaggedNode,
    preloadedFeaturesQuery: PreloadedQuery<any, Record<string, unknown>>,
    children: any,
};

const FeaturesDisplay = ({characterLevel, featuresQuery, preloadedFeaturesQuery}: Props): JSX.Element => {
    // TODO really unhappy with this any here
    const featuresData: any = usePreloadedQuery(featuresQuery, preloadedFeaturesQuery);

    return (
        <div style={{height: '50%', overflow: 'scroll'}}>
            {featuresData && featuresData.features.map((feature: FeatureType) => {
                return (feature.level <= characterLevel) && <Feature featureDetails={feature}></Feature>
            })}
        </div>
    )
}

export default FeaturesDisplay;