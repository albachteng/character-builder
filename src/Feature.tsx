type Props = {
    featureDetails: FeatureType
}

export interface FeatureType {
    name: string,
    desc: string
}

const Feature = ({featureDetails}: Props) => {
    console.log('featureDetails', featureDetails);
    return (

        <div>
            {featureDetails && 
            <p>
                {featureDetails.name}<br></br><br></br>{featureDetails.desc}
            </p>}
        </div>
    )
} 

export default Feature;