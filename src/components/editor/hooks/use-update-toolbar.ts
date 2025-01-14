import { useEffect } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {
  $getSelection,
  $isRangeSelection,
  BaseSelection,
  COMMAND_PRIORITY_CRITICAL,
} from 'lexical'
import { SELECTION_CHANGE_COMMAND } from 'lexical'

import { useToolbarContext } from '../context/toolbar-context'

export function useUpdateToolbarHandler(
  callback: (selection: BaseSelection) => void
) {
  const [editor] = useLexicalComposerContext()
  const { activeEditor } = useToolbarContext()

  useEffect(() => {
    return activeEditor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        const selection = $getSelection()
        if (selection) {
          callback(selection)
        }
        return false
      },
      COMMAND_PRIORITY_CRITICAL
    )
  }, [editor, callback])

  useEffect(() => {
    activeEditor.getEditorState().read(() => {
      const selection = $getSelection()
      if (selection) {
        callback(selection)
      }
    })
  }, [activeEditor, callback])
}
