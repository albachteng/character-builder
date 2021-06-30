import { GraphQLTaggedNode, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import Feature from './Feature';
import {FeatureType} from './Feature';


type Props = {
    featuresQuery: GraphQLTaggedNode,
    preloadedFeaturesQuery: PreloadedQuery<any, Record<string, unknown>>,
    children: any,
};

const FeaturesDisplay = ({featuresQuery, preloadedFeaturesQuery}: Props): JSX.Element => {
    // TODO really unhappy with this any here
    const featuresData: any = usePreloadedQuery(featuresQuery, preloadedFeaturesQuery);

    return (
        <div>
            {featuresData && featuresData.features.map((feature: FeatureType) => {
                return <Feature featureDetails={feature}></Feature>
            })}
        </div>
    )
}

export default FeaturesDisplay;