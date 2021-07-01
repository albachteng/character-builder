type Props = {
    featureDetails: FeatureType
}

export interface FeatureType {
    name: string,
    desc: string[],
    level: number
}

const Feature = ({featureDetails}: Props) => {

    const expand = () => {
        const desc = document.getElementById(`desc${featureDetails.name}`);
        desc && (desc.style.display = 'block');
    };

    return (
        <div>
            <p>{featureDetails.name}, Level {featureDetails.level}</p>
            <button onClick={expand}>Expand</button>
            {featureDetails.desc.map((paragraph, i) => {
                return (
                    <p 
                        id={`desc${featureDetails.name}`} 
                        style={{display: 'none'}} 
                        key={`${featureDetails.name + i}`}
                    >
                        {paragraph}
                    </p>
                )
            })}
        </div>
    )
} 

export default Feature;