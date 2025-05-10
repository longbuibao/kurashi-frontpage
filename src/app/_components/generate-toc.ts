import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeToc, { HtmlElementNode } from '@jsdevtools/rehype-toc'
import { visit } from 'unist-util-visit'
import { toHtml } from 'hast-util-to-html'
import rehypeSlug from 'rehype-slug'

export async function extractToc (markdown: string): Promise<string> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeToc, {
      headings: ['h2'],
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
              children: [{ type: 'text', value: 'Nội dung chính' }]
            },
            modifiedToc
          ]
        }
      },
      cssClasses: {
        toc: 'toc'
      }
    })

  const file = await processor.run(processor.parse(markdown))

  let tocNode: any = null
  visit(file, 'element', (node: any) => {
    if (node.tagName === 'nav' && node.properties?.className?.includes('toc')) {
      tocNode = node
    }
  })

  if (!tocNode) return ''

  return toHtml(tocNode)
}
