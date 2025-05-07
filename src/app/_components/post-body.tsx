import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeToc, { HtmlElementNode } from '@jsdevtools/rehype-toc'

import './post-body.css'

interface Props {
  content: string
}

export async function PostBody ({ content }: Props): Promise<React.ReactElement> {
  const processedContent = content.replace(/\/public\/images/g, '/images')
  return (
    <div className='prose mx-auto w-[80%]'>
      <Markdown
        remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeToc, {
          nav: false,
          customizeTOC: (toc: HtmlElementNode) => {
            const convertOlToUl = (node: any): any => {
              if (node.type === 'element' && node.tagName === 'ol') {
                node.tagName = 'ul'
              }
              if (node.children) {
                node.children.forEach(convertOlToUl)
              }
              return node
            }

            const modifiedToc = convertOlToUl(toc)

            return {
              type: 'element',
              tagName: 'div',
              properties: { className: ['toc-wrapper'] },
              children: [
                {
                  type: 'element',
                  tagName: 'h2',
                  properties: { className: ['toc-title'] },
                  children: [{ type: 'text', value: 'Mục lục' }]
                },
                modifiedToc
              ]
            }
          }
        }]]}
      >{processedContent}
      </Markdown>
    </div>
  )
}
