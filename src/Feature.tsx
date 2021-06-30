type Props = {
    featureDetails: FeatureType
}

export interface FeatureType {
    name: string,
    desc: string[],
    level: number
}

const Feature = ({featureDetails}: Props) => {

    return (
        <div>
            <p>{featureDetails.name}, Level {featureDetails.level}</p>
            <br/>
            {featureDetails.desc.map((paragraph, i) => {
                return (
                    <p key={`${featureDetails.name + i}`}>{paragraph}</p>
                )
            })}
        </div>
    )
} 

export default Feature;