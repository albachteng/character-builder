import { graphql } from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay';
import SpellDetails from './SpellDetails';
import SpellHeader from './SpellHeader';
import type { SpellsDisplayFragment_query$key} from './__generated__/SpellHeaderFragment_query.graphql';
import type { SpellsDisplaySpellFragment_ruleSections$key } from './__generated__/SpellsDisplaySpellFragment_ruleSections.graphql';
import type { SpellsDisplaySpellcastingFragment_ruleSections$key } from './__generated__/SpellsDisplaySpellcastingFragment_ruleSections.graphql';
import InfoModal from '../InfoModal';
import Spell from './Spell';

type Props = {
  queryRef: SpellsDisplayFragment_query$key
  spellcastingRulesRef: SpellsDisplaySpellcastingFragment_ruleSections$key
  spellRulesRef: SpellsDisplaySpellFragment_ruleSections$key
}

function SpellsDisplay({
  queryRef,
  spellcastingRulesRef,
  spellRulesRef
}: Props) {

  const { spells } = useFragment(graphql`
    fragment SpellsDisplayFragment_query on Query {
      spells (filter: $spells) {
        index
        ...SpellHeaderFragment_spell
        ...SpellDetailsFragment_spell
        subclasses {
          index
          name
        }
      }
    }`, queryRef);

  const { desc, name } = useFragment(graphql`
    fragment SpellsDisplaySpellFragment_ruleSections on RuleSection {
      desc
      name
    }`, spellRulesRef);

  const { desc: spellcastingDesc, name: spellcastingName } = useFragment(graphql`
    fragment SpellsDisplaySpellcastingFragment_ruleSections on RuleSection {
      desc
      name
    }`, spellcastingRulesRef);

  if (spells) {
    return (
      <section className="full-width">
          <InfoModal label={name} markdown={desc}/>
          <InfoModal label={spellcastingName} markdown={spellcastingDesc}/>
          <h3>Spellbook</h3>
          {spells?.map((_ , i, spells) => {
            return (
              <Spell key={spells[i].__id} spellRef={spells[i]}/>
            )
          })}
      </section>
    );
  }
  return null
}

export default SpellsDisplay;
