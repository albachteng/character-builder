import { Background, MappingFunc } from "../types";
import withUseOption from "./withUseOption";
import RenderMap from "./RenderMap";
import QueryWrapper from "./QueryWrapper";
import { PersonalityByBackground } from "../queries";

interface Props {
    background?: Background
}

function Personality({background = 'acolyte'}: Props) {

    const personalityMap: MappingFunc<string> = (trait, index) => {
        if (trait) {
        return (
            <p key={`${trait}${index}`}>
            Trait:
            {trait}
            </p>
        );
        }
    };

    const idealsMap: MappingFunc<any> = (ideal, index) => {
        if (ideal) {
        return (
            <p key={`${ideal}${index}`}>
            Ideal:
            {ideal?.desc}
            </p>
        );
        }
    };

    const RenderMapWithOption = withUseOption(RenderMap);

    return (
        <>
            <QueryWrapper
            query={PersonalityByBackground}
            variables={{ filter: { index: background } }}
            dataType={['background', 'personality_traits']}
            >
            <RenderMapWithOption mappingFunc={personalityMap} />
            </QueryWrapper>
            <QueryWrapper
            query={PersonalityByBackground}
            variables={{ filter: { index: background } }}
            dataType={['background', 'ideals']}
            >
            <RenderMapWithOption mappingFunc={idealsMap} />
            </QueryWrapper>
            <QueryWrapper
            query={PersonalityByBackground}
            variables={{ filter: { index: background } }}
            dataType={['background', 'bonds']}
            >
            <RenderMapWithOption mappingFunc={personalityMap} />
            </QueryWrapper>
            <QueryWrapper
            query={PersonalityByBackground}
            variables={{ filter: { index: background } }}
            dataType={['background', 'flaws']}
            >
            <RenderMapWithOption mappingFunc={personalityMap} />
            </QueryWrapper>
        </>
        )
}

export default Personality;