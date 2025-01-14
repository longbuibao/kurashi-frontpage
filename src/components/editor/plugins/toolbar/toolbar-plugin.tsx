import { useEffect } from 'react'
import { useState } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND } from 'lexical'

import { ToolbarContext } from '@/components/editor/context/toolbar-context'
import { Separator } from '@/components/ui/separator'

import { BlockFormatDropDown } from './block-format-toolbar-plugin'
import { FormatBulletedList } from './block-format/format-bulleted-list'
import { FormatCheckList } from './block-format/format-check-list'
import { FormatCodeBlock } from './block-format/format-code-block'
import { FormatHeading } from './block-format/format-heading'
import { FormatNumberedList } from './block-format/format-numbered-list'
import { FormatParagraph } from './block-format/format-paragraph'
import { FormatQuote } from './block-format/format-quote'
import { BlockInsertPlugin } from './block-insert-plugin'
import { InsertColumnsLayout } from './block-insert/insert-columns-layout'
import { InsertEmbeds } from './block-insert/insert-embeds'
import { InsertExcalidraw } from './block-insert/insert-excalidraw'
import { InsertHorizontalRule } from './block-insert/insert-horizontal-rule'
import { InsertImage } from './block-insert/insert-image'
import { InsertInlineImage } from './block-insert/insert-inline-image'
import { InsertPageBreak } from './block-insert/insert-page-break'
import { InsertPoll } from './block-insert/insert-poll'
import { InsertTable } from './block-insert/insert-table'
import { ClearFormattingToolbarPlugin } from './clear-formatting-toolbar-plugin'
import { CodeLanguageToolbarPlugin } from './code-language-toolbar-plugin'
import { ElementFormatToolbarPlugin } from './element-format-toolbar-plugin'
import { FontBackgroundToolbarPlugin } from './font-background-toolbar-plugin'
import { FontColorToolbarPlugin } from './font-color-toolbar-plugin'
import { FontFamilyToolbarPlugin } from './font-family-toolbar-plugin'
import { FontFormatToolbarPlugin } from './font-format-toolbar-plugin'
import { FontSizeToolbarPlugin } from './font-size-toolbar-plugin'
import { HistoryToolbarPlugin } from './history-toolbar-plugin'
import { LinkToolbarPlugin } from './link-toolbar-plugin'
import { SubSuperToolbarPlugin } from './subsuper-toolbar-plugin'

export function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext()

  const [activeEditor, setActiveEditor] = useState(editor)
  const [blockType, setBlockType] = useState<string>('paragraph')

  const $updateToolbar = () => {}

  useEffect(() => {
    return activeEditor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor)
        return false
      },
      COMMAND_PRIORITY_CRITICAL
    )
  }, [editor])

  return (
    <ToolbarContext
      activeEditor={activeEditor}
      $updateToolbar={$updateToolbar}
      blockType={blockType}
      setBlockType={setBlockType}
    >
      <div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b bg-white p-1">
        <HistoryToolbarPlugin />
        <Separator orientation="vertical" className="h-8" />
        <BlockFormatDropDown>
          <FormatParagraph />
          <FormatHeading levels={['h1', 'h2', 'h3']} />
          <FormatNumberedList />
          <FormatBulletedList />
          <FormatCheckList />
          <FormatCodeBlock />
          <FormatQuote />
        </BlockFormatDropDown>
        {blockType === 'code' ? (
          <CodeLanguageToolbarPlugin />
        ) : (
          <>
            <FontFamilyToolbarPlugin />
            <FontSizeToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <FontFormatToolbarPlugin format="bold" />
            <FontFormatToolbarPlugin format="italic" />
            <FontFormatToolbarPlugin format="underline" />
            <FontFormatToolbarPlugin format="strikethrough" />
            <Separator orientation="vertical" className="h-8" />
            <SubSuperToolbarPlugin />
            <LinkToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <ClearFormattingToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <FontColorToolbarPlugin />
            <FontBackgroundToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <ElementFormatToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <BlockInsertPlugin>
              <InsertHorizontalRule />
              <InsertPageBreak />
              <InsertImage />
              <InsertInlineImage />
              <InsertExcalidraw />
              <InsertTable />
              <InsertPoll />
              <InsertColumnsLayout />
              <InsertEmbeds />
            </BlockInsertPlugin>
          </>
        )}
      </div>
    </ToolbarContext>
  )
}
