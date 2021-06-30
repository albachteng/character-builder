import { GraphQLTaggedNode, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import Feature from './Feature';
import {FeatureType} from './Feature';
import featuresQuery from './__generated__/AppFeaturesQuery.graphql';

type Props = {
    featuresQuery: typeof featuresQuery
    preloadedFeaturesQuery: PreloadedQuery<any, Record<string, unknown>>
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