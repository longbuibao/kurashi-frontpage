import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { extractToc } from './generate-toc'

import './post-body.css'
import { TableOfContents } from './table-of-content'
import { Post } from '@/interfaces/post'

interface Props {
  post: Post
}

export async function PostBody ({ post }: Props): Promise<React.ReactElement> {
  const processedContent = post.content.replace(/\/public\/images/g, '/images')
  const toc = await extractToc(post.content)

  return (
    <div className='prose mx-auto w-full'>
      <TableOfContents html={toc} />
      <Markdown
        remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]}
      >{processedContent}
      </Markdown>
    </div>
  )
}
