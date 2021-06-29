import Feature from './Feature';
import {FeatureType} from './Feature';

type Props = {
    features: FeatureType[]
}

const FeaturesDisplay = ({features}: Props): JSX.Element => {
    return (
        <div>
            
            {/* {features && features.map((feature) => {
                <Feature featureDetails={feature}></Feature>
            })} */}
        </div>
    )
}

export default FeaturesDisplay;