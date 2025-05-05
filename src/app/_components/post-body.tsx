import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeToc from '@jsdevtools/rehype-toc'

interface Props {
  content: string
}

export async function PostBody ({ content }: Props): Promise<React.ReactElement> {
  const processedContent = content.replace(/\/public\/images/g, '/images')
  return (
    <div className='prose mx-auto w-[80%]'>
      <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug, rehypeToc]}>{processedContent}</Markdown>
    </div>
  )
}
