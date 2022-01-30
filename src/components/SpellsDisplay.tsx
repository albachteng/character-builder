import { SpellModByClass, SpellcastingInfo } from '../queries';
import { AbilityScore, CharacterClass, Spell } from '../types';
import SpellSlots from './SpellSlots';
import dice from '../utilities/dice';
import { ability_score_abbr } from '../types/ability_score';
import SpellBook from './SpellBook';
import { ReactNode } from 'react';
import QueryWrapper from './QueryWrapper';
import RenderMap, {MappingFunc} from './RenderMap';
import useAddToList from '../hooks/useAddToList';
import SpellDetails from './SpellDetails';

type Props = {
    characterClass: CharacterClass,
    characterLevel: number,
    characterStats: AbilityScore
}

type SpellMod = {
    [key: string]: any,
    name: ability_score_abbr
}

const SpellsDisplay = ({ characterClass, characterLevel, characterStats }: Props) => {

    const spellModMapFunc: MappingFunc<SpellMod> = (item) => {
        return <p key={item?.name}>{item?.name}: {dice.mod(characterStats[item?.name])}</p>
    };   

    const spellcastingInfoMapFunc: MappingFunc<any> = (info, index) => { // TODO
        const desc: ReactNode[] = [];
        info?.desc?.forEach((paragraph: string, index: number) => {
            desc.push(<p key={`${info?.name}-paragraph-${index}`}>{paragraph}</p>);
        });
        return (
            <div>
                <h4>{info.name}</h4>
                {desc} 
            </div>
        )
    };

    const { handleClick, list } = useAddToList<Spell>();
    console.log({list});

    return (
        <>
            <h2>Spells Display</h2>
            <h3>Spell Slots</h3>
            <SpellSlots
                characterClass={characterClass}
                characterLevel={characterLevel}
            />
            <h3>Spell Mod</h3>
            <QueryWrapper
                query={SpellModByClass}
                variables={{filter: { index: characterClass}}}
                dataType={['class', 'spellcasting', 'spellcasting_ability']}
            >
                <RenderMap mappingFunc={spellModMapFunc} />
            </QueryWrapper>
            <QueryWrapper
                query={SpellcastingInfo}
                variables={{filter: {index: characterClass}}}
                dataType={['class', 'spellcasting', 'info']}
            >
                <RenderMap mappingFunc={spellcastingInfoMapFunc} />
            </QueryWrapper>
            <h3>Spellbook</h3>
            <SpellBook characterClass={characterClass} characterLevel={characterLevel} handleClick={handleClick}/>
            <h4>Added: </h4>
            {list.map((spell, index, arr) => <SpellDetails spell={spell} />)} 
            <pre>{JSON.stringify(list, null, 2)}</pre>
        </>
    )
}

export default SpellsDisplay;