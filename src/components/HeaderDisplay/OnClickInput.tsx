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
        variant="headless"
        onBlur={() => handlers.close()}
        onKeyDown={(e: React.KeyboardEvent) => {
          e.preventDefault();
          if (e.keyCode === 13) handlers.close();
        }}
        value={stringValue}
        onChange={(e: React.BaseSyntheticEvent) => {
          e.preventDefault()
          setStringValue(e.currentTarget.value)
        }}
      />
      : <h3
          onClick={() => handlers.open()}
        >
          {stringValue}
        </h3>
  )
}

export default OnClickInput;
