import { useCallback } from 'react'

import { $isCodeNode } from '@lexical/code'
import { $createCodeNode } from '@lexical/code'
import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
} from '@lexical/markdown'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $createTextNode } from 'lexical'
import { $getRoot } from 'lexical'
import { FileTextIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { MARKDOWN_TRANSFORMERS } from '../../transformers/markdown-transformers'

export function MarkdownTogglePlugin({
  shouldPreserveNewLinesInMarkdown,
}: {
  shouldPreserveNewLinesInMarkdown: boolean
}) {
  const [editor] = useLexicalComposerContext()

  const handleMarkdownToggle = useCallback(() => {
    editor.update(() => {
      const root = $getRoot()
      const firstChild = root.getFirstChild()
      if ($isCodeNode(firstChild) && firstChild.getLanguage() === 'markdown') {
        $convertFromMarkdownString(
          firstChild.getTextContent(),
          MARKDOWN_TRANSFORMERS,
          undefined, // node
          shouldPreserveNewLinesInMarkdown
        )
      } else {
        const markdown = $convertToMarkdownString(
          MARKDOWN_TRANSFORMERS,
          undefined, //node
          shouldPreserveNewLinesInMarkdown
        )
        const codeNode = $createCodeNode('markdown')
        codeNode.append($createTextNode(markdown))
        root.clear().append(codeNode)
        if (markdown.length === 0) {
          codeNode.select()
        }
      }
    })
  }, [editor, shouldPreserveNewLinesInMarkdown])

  return (
    <Button
      variant={'ghost'}
      onClick={handleMarkdownToggle}
      title="Convert From Markdown"
      aria-label="Convert from markdown"
      size={'sm'}
      className="p-2"
    >
      <FileTextIcon className="size-4" />
    </Button>
  )
}
