import { SpellModByClass } from '../queries';
import { AbilityScore, ability_score, CharacterClass } from '../types';
import SpellSlots from './SpellSlots';
import QueryMap from './QueryMap';
import dice from '../utilities/dice';
import { ability_score_abbr } from '../types/ability_score';
import { SpellsOptionsByClassAndLevel } from '../queries/SpellsOptionsByClassAndLevel';

type Props = {
    characterClass: CharacterClass,
    characterLevel: number,
    characterStats: AbilityScore
}

const buildSpellVariables = (characterClass: string, characterLevel: number) => {
    const variables: any = {"filter": {
        "AND": {"classes": {"index": characterClass}},
        "OR": [],
    }};
    for (let i = 0; i <= characterLevel; i += 1) {
        variables.filter.OR.push({"level": i});
    };
    return variables
};

const SpellsDisplay = ({ characterClass, characterLevel, characterStats }: Props) => {

    const spellModMapFunc = (item: {[key: string]: any, name: ability_score_abbr}, index: number, arr: any[]) => {
        return <p>{item.name}: {dice.mod(characterStats[item.name])} </p>
    };   

    const spellMapFunc = (spell: {[key: string]: any, desc: string[]}, index: number, arr: any[]) => {
        const description: JSX.Element[] = [];
        spell.desc.forEach((paragraph: string, index: number, arr: string[]) => {
            description.push(<p key={`${spell.index}${index}`}>{paragraph}</p>);
        });
        return (
            <div>
                <h4>
                    {spell.name}: {spell.level > 0 ? `Level ${spell.level}` : `Cantrip`}
                </h4>
                {description}
            </div>
        )
    };

    return (
        <>
            <h2>Spells Display</h2>
            <h3>Spell Slots</h3>
            <SpellSlots
                characterClass={characterClass}
                characterLevel={characterLevel}
            />
            <h3>Spell Mod</h3>
            <QueryMap
                query={SpellModByClass}
                variables={{filter: { index: characterClass}}}
                mappingFunc={spellModMapFunc}
                dataType={['class', 'spellcasting', 'spellcasting_ability']}
            />
            <h3>Spellbook</h3>
            <QueryMap
                query={SpellsOptionsByClassAndLevel}
                variables={buildSpellVariables(characterClass, characterLevel)}
                mappingFunc={spellMapFunc}
                dataType={['spells']}

            /> 
        </>
    )
}

export default SpellsDisplay