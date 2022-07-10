import { Remarkable } from 'remarkable';

type Props = {
  children: string
}

const md = new Remarkable();

function MarkdownViewer({children}: Props) {

  const content = md.render(children);

  return <div dangerouslySetInnerHTML={{__html:content}} />;
};

export default MarkdownViewer;
