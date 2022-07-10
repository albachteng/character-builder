import MarkdownViewer from './MarkdownViewer';
import { useState } from 'react';
import { InfoCircle } from 'tabler-icons-react';
import { Modal, Tooltip } from '@mantine/core';

type Props = {
  markdown: string
  label?: string
}

function InfoModal({markdown, label}: Props) {

  const [ opened, setOpened ] = useState(false)

    return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} withCloseButton={false}>
        <MarkdownViewer>{markdown}</MarkdownViewer>
      </Modal>
      <Tooltip label={label}>
        <InfoCircle className="info-circle" onClick={() => setOpened(true)}/>
      </Tooltip>
    </>
  )
}

export default InfoModal;
