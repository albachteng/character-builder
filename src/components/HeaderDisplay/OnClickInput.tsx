import { useDisclosure, useInputState, useClickOutside} from '@mantine/hooks';
import { TextInput } from '@mantine/core';
import { useEffect } from 'react';
import capitalize from '../../utilities/capitalize';

type Props = {
  initialValue: string
  label: string
}

function OnClickInput({initialValue, label}: Props) {

  const [ stringValue, setStringValue ] = useInputState(initialValue)
  const [ opened, handlers ] = useDisclosure(false)

  const ref = useClickOutside(() => handlers.close());

  useEffect(() => {
    setStringValue(initialValue)
  }, [initialValue])

  return (
    opened ?
      <TextInput
        ref={ref}
        className="text-input"
        // variant="unstyled"
        onBlur={() => handlers.close()}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.keyCode === 13) handlers.close();
        }}
        value={stringValue}
        onChange={setStringValue}
      />
      : <h3
          onClick={() => handlers.open()}
        >
          {label}: {capitalize(stringValue)}
        </h3>
  )
}

export default OnClickInput;
