import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

interface Props {
  content: string
}

export function PostBody ({ content }: Props): React.ReactElement {
  const processedContent = content.replace(/\/public\/images/g, '/images')
  return (
    <div className='prose mx-auto w-[80%]'>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{processedContent}</Markdown>
    </div>
  )
}
