import { createContext, useContext, useState } from 'react'

import { LexicalEditor } from 'lexical'

const Context = createContext<{
  activeEditor: LexicalEditor
  $updateToolbar: () => void
  blockType: string
  setBlockType: (blockType: string) => void
}>({
      activeEditor: {} as LexicalEditor,
      $updateToolbar: () => {},
      blockType: 'paragraph',
      setBlockType: () => {}
    })

export function ToolbarContext ({
  activeEditor,
  $updateToolbar,
  blockType,
  setBlockType,
  children
}: {
  activeEditor: LexicalEditor
  $updateToolbar: () => void
  blockType: string
  setBlockType: (blockType: string) => void
  children: React.ReactNode
}) {
  return (
    <Context.Provider
      value={{ activeEditor, $updateToolbar, blockType, setBlockType }}
    >
      {children}
    </Context.Provider>
  )
}

export function useToolbarContext () {
  return useContext(Context)
}
