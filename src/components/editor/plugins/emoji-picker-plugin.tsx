import * as React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import dynamic from 'next/dynamic'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {
  MenuOption,
  useBasicTypeaheadTriggerMatch
} from '@lexical/react/LexicalTypeaheadMenuPlugin'
import {
  $createTextNode,
  $getSelection,
  $isRangeSelection,
  TextNode
} from 'lexical'
import { createPortal } from 'react-dom'

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'

const LexicalTypeaheadMenuPlugin = dynamic(
  async () => await import('./default/lexical-typeahead-menu-plugin'),
  { ssr: false }
)

class EmojiOption extends MenuOption {
  title: string
  emoji: string
  keywords: string[]

  constructor (
    title: string,
    emoji: string,
    options: {
      keywords?: string[]
    }
  ) {
    super(title)
    this.title = title
    this.emoji = emoji
    this.keywords = (options.keywords != null) || []
  }
}

interface Emoji {
  emoji: string
  description: string
  category: string
  aliases: string[]
  tags: string[]
  unicode_version: string
  ios_version: string
  skin_tones?: boolean
}

const MAX_EMOJI_SUGGESTION_COUNT = 10

export function EmojiPickerPlugin () {
  const [editor] = useLexicalComposerContext()
  const [queryString, setQueryString] = useState<string | null>(null)
  const [emojis, setEmojis] = useState<Emoji[]>([])
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    import('../utils/emoji-list').then((file) => setEmojis(file.default))
  }, [])

  const emojiOptions = useMemo(
    () =>
      emojis != null
        ? emojis.map(
          ({ emoji, aliases, tags }) =>
            new EmojiOption(aliases[0], emoji, {
              keywords: [...aliases, ...tags]
            })
        )
        : [],
    [emojis]
  )

  const checkForTriggerMatch = useBasicTypeaheadTriggerMatch(':', {
    minLength: 0
  })

  const options: EmojiOption[] = useMemo(() => {
    return emojiOptions
      .filter((option: EmojiOption) => {
        return queryString != null
          ? (new RegExp(queryString, 'gi').exec(option.title) != null) ||
            option.keywords != null
              ? option.keywords.some((keyword: string) =>
                new RegExp(queryString, 'gi').exec(keyword)
              )
              : false
          : emojiOptions
      })
      .slice(0, MAX_EMOJI_SUGGESTION_COUNT)
  }, [emojiOptions, queryString])

  const onSelectOption = useCallback(
    (
      selectedOption: EmojiOption,
      nodeToRemove: TextNode | null,
      closeMenu: () => void
    ) => {
      editor.update(() => {
        const selection = $getSelection()

        if (!$isRangeSelection(selection) || selectedOption == null) {
          return
        }

        if (nodeToRemove != null) {
          nodeToRemove.remove()
        }

        selection.insertNodes([$createTextNode(selectedOption.emoji)])

        closeMenu()
      })
    },
    [editor]
  )

  return (
    // @ts-expect-error
    <LexicalTypeaheadMenuPlugin<EmojiOption>
      onQueryChange={setQueryString}
      onSelectOption={onSelectOption}
      triggerFn={checkForTriggerMatch}
      options={options}
      onOpen={() => {
        setIsOpen(true)
      }}
      onClose={() => {
        setIsOpen(false)
      }}
      menuRenderFn={(
        anchorElementRef,
        { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
      ) => {
        return (anchorElementRef.current != null) && (options.length > 0)
          ? createPortal(
            <div className='fixed w-[200px] rounded-md shadow-md'>
              <Command
                onKeyDown={(e) => {
                  if (e.key === 'ArrowUp') {
                    e.preventDefault()
                    setHighlightedIndex(
                      selectedIndex !== null
                        ? (selectedIndex - 1 + options.length) %
                              options.length
                        : options.length - 1
                    )
                  } else if (e.key === 'ArrowDown') {
                    e.preventDefault()
                    setHighlightedIndex(
                      selectedIndex !== null
                        ? (selectedIndex + 1) % options.length
                        : 0
                    )
                  }
                }}
              >
                <CommandList>
                  <CommandGroup>
                    {options.map((option, index) => (
                      <CommandItem
                        key={option.key}
                        value={option.title}
                        onSelect={() => {
                          selectOptionAndCleanUp(option)
                        }}
                        className={`flex items-center gap-2 ${
                            selectedIndex === index
                              ? 'bg-accent'
                              : '!bg-transparent'
                          }`}
                      >
                        {option.emoji} {option.title}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>,
            anchorElementRef.current
          )
          : null
      }}
    />
  )
}
