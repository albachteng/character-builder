type Props = {
    featureDetails: FeatureType
}

export interface FeatureType {
    name: string,
    desc: string
}

const Feature = ({featureDetails}: Props) => {
    return (
        <div>helloworld</div>
    )
} 

export default Feature;