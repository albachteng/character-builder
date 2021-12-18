import { FeatureType } from '../types';

type Props = {
    feature: FeatureType
}

const Feature = ({feature}: Props) => {

    const expand = () => {
        const desc = document.getElementById(`desc${feature.name}`);
        desc && (desc.style.display = 'block');
    };

    return (
        <div>
            <p>{feature.name}{feature.level && `, Level ${feature.level}`}</p>
            <button onClick={expand}>Expand</button>
            {feature.desc.map((paragraph, i) => {
                return (
                    <p id={`desc${feature.name}`} style={{display: 'none'}} key={`${feature.name + i}`}>
                        {paragraph}
                    </p>
                )
            })}
        </div>
    )
} 

export default Feature;