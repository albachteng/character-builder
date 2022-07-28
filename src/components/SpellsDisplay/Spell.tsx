import SpellDetails from "./SpellDetails";
import SpellHeader from "./SpellHeader";
import { useDisclosure, useClickOutside} from '@mantine/hooks';

type Props = {
  spellRef: any
}

function Spell({spellRef}: Props) {

  const [ opened, handlers ] = useDisclosure(false)
  const ref = useClickOutside(() => handlers.close());

  return (
    <div ref={ref} onClick={() => handlers.toggle()}>
      <SpellHeader spellRef={spellRef}/>
      {opened && <SpellDetails spellRef={spellRef}/>}
    </div>
  )
}

export default Spell;
