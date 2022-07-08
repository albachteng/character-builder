import { useDisclosure, useInputState } from '@mantine/hooks';
import { TextInput } from '@mantine/core';

type Props = {
  children: string
}

function OnClickInput({children}: Props) {

  const [ stringValue, setStringValue ] = useInputState(children)
  const [ opened, handlers ] = useDisclosure(false)

  return (
    opened ?
      <TextInput
        classNames="text-input"
        variant="unstyled"
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
          {stringValue}
        </h3>
  )
}

export default OnClickInput;
