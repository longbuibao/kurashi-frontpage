import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

interface Props {
  content: string
}

export function PostBody ({ content }: Props): React.ReactElement {
  return (
    <div className='max-w-2xl mx-auto'>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content}</Markdown>
    </div>
  )
}
