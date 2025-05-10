import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import Head from 'next/head'
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.title,
    author: {
      '@type': 'Organization',
      name: 'Kurashi'
    },
    mainEntityOfPage: `https://www.kurashi.com.vn/blog/${(post as any).fileName}`,
    datePublished: post.date.toLocaleDateString()
  }
  return (
    <div className='prose mx-auto w-[80%]'>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <TableOfContents html={toc} />
      <Markdown
        remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]}
      >{processedContent}
      </Markdown>
    </div>
  )
}
