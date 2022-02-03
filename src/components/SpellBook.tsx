import { SpellsOptionsByClassAndLevel } from '../queries';
import { CharacterClass, Spell as SpellType } from '../types';
// import Spell from './Spell';
import QueryWrapper from './QueryWrapper';
import RenderMap, { MappingFunc } from './RenderMap';
import withOnClick from './withOnClick';
import SpellDetails from './SpellDetails';
import SpellHeader from './SpellHeader';

type Props = {
  characterClass: CharacterClass;
  characterLevel: number;
  handleClick: (spell: SpellType) => void; // TODO
  list: SpellType[];
};

const buildSpellVariables = (
  characterClass: string,
  characterLevel: number
) => {
  const variables: { [key: string]: any } = {
    filter: {
      AND: { classes: { index: characterClass } },
      OR: []
    }
  };
  for (let i = 0; i <= characterLevel; i += 1) {
    variables.filter.OR.push({ level: i });
  }
  return variables;
};

const SpellBook = ({
  characterClass,
  characterLevel,
  handleClick,
  list
}: Props) => {
  const spellMapFunc: MappingFunc<SpellType> = (spell, index, arr) => {
    const Header = () => (
      <SpellHeader {...{ spell, index, handleClick, list }} />
    );
    const SpellDetailsWithOnClick = withOnClick(SpellDetails, Header);
    return (
      <SpellDetailsWithOnClick
        spell={spell}
        id={`${spell?.name}${index}`}
        key={`${spell?.name}${index}`}
      />
    );
  };

  return (
    <ul>
      <QueryWrapper
        query={SpellsOptionsByClassAndLevel}
        variables={buildSpellVariables(characterClass, characterLevel)}
        dataType={['spells']}
      >
        <RenderMap mappingFunc={spellMapFunc} sortBy={'levelAsc'} />
      </QueryWrapper>
    </ul>
  );
};

export default SpellBook;
