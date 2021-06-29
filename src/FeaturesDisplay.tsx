import { usePreloadedQuery } from 'react-relay';
import Feature from './Feature';
import {FeatureType} from './Feature';
import featuresQuery from './__generated__/AppFeaturesQuery.graphql';

type Props = {
    featuresQuery: typeof featuresQuery
    preloadedFeaturesQuery: any
};

const FeaturesDisplay = ({featuresQuery, preloadedFeaturesQuery}: Props): JSX.Element => {
    const featuresData: any = usePreloadedQuery(featuresQuery, preloadedFeaturesQuery);
    featuresData && console.log('featuresData', featuresData);

    return (
        <div>
            {featuresData && featuresData.features.map((feature: FeatureType) => {
                return <Feature featureDetails={feature}></Feature>
            })}
        </div>
    )
}

export default FeaturesDisplay;