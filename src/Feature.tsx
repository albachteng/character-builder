type Props = {
    featureDetails: FeatureType
}

export interface FeatureType {
    name: string,
    desc: string[],
    level: number
}

const Feature = ({featureDetails}: Props) => {
    console.log('featureDetails', featureDetails);
    return (

        <div>
                <p>
                    {featureDetails.name}, Level {featureDetails.level}
                    <br/>
                    {featureDetails.desc.map(paragraph => <p>{paragraph}</p>)}
                </p>
        </div>
    )
} 

export default Feature;