import { useClickOutside, useDisclosure } from '@mantine/hooks';
import { ReactNode, useState } from 'react';

type Props = {
  label: string
  children: ReactNode
}

function OnClickDescription({label, children}: Props) {

  const [ opened, handlers ] = useDisclosure(false);
  const ref = useClickOutside(() => handlers.close());

  return (
    <>
      <p ref={ref} onClick={() => handlers.toggle()}>{label}</p>
      {opened && children}
    </>
  )
}

export default OnClickDescription;
