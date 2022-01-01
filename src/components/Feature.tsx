import useOnClickDescription from '../hooks/useOnClickDescription';
import { FeatureType } from '../types';

type Props = {
    feature: FeatureType
}

const Feature = ({feature}: Props) => {

    const { description, toggleDescription } = useOnClickDescription(feature);

    return (
        <div>
            <p onClick={toggleDescription}>{feature.name}{feature.level && `, Level ${feature.level}`}</p>
            {description}
        </div>
    )
} 

export default Feature;