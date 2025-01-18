'use client'
import YooptaEditor, {
  createYooptaEditor,
  YooptaContentValue,
  YooptaOnChangeOptions,
  PluginElementRenderProps
} from '@yoopta/editor'
import { html, markdown } from '@yoopta/exports'
import Paragraph from '@yoopta/paragraph'
import Blockquote from '@yoopta/blockquote'
import Embed from '@yoopta/embed'
import Image from '@yoopta/image'
import Link from '@yoopta/link'
import Callout from '@yoopta/callout'
import Video from '@yoopta/video'
import File from '@yoopta/file'
import Accordion from '@yoopta/accordion'
import { NumberedList, BulletedList, TodoList } from '@yoopta/lists'
import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from '@yoopta/marks'
import { HeadingOne, HeadingThree, HeadingTwo } from '@yoopta/headings'
import Code from '@yoopta/code'
import Table from '@yoopta/table'
import Divider from '@yoopta/divider'
import ActionMenuList, { DefaultActionMenuRender } from '@yoopta/action-menu-list'
import Toolbar, { DefaultToolbarRender } from '@yoopta/toolbar'
import LinkTool, { DefaultLinkToolRender } from '@yoopta/link-tool'
import NextImage from 'next/image'
import NextLink from 'next/link'

import { useMemo, useRef, useState } from 'react'
import { WITH_BASIC_INIT_VALUE } from './initValue'

const plugins = [
  Paragraph,
  Table,
  Divider.extend({
    elementProps: {
      divider: (props) => ({
        ...props,
        color: '#007aff'
      })
    }
  }),
  Accordion,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Blockquote,
  Callout,
  NumberedList,
  BulletedList,
  TodoList,
  Code,
  Link.extend({
    renders: {
      link: ({ attributes, children, element }) => {
        return (
          <NextLink
            {...attributes}
            data-key={element.id}
            className='text-blue-500 hover:underline'
            href={element.props.url}
            target={element.props.target}
            rel={element.props.rel}
          >
            {children}
          </NextLink>
        )
      }
    }
  }),
  Embed,
  Image.extend({
    renders: {
      image: (props: PluginElementRenderProps) => {
        const { children, element, attributes } = props
        return (
          <div {...attributes}>
            <NextImage
              src={element.props.src}
              alt={element.props.alt}
              width={element.props.sizes.width}
              height={element.props.sizes.height}
            />
            {children}
          </div>
        )
      }
    }
  }),
  Video,
  File.extend({})
]

const TOOLS = {
  ActionMenu: {
    render: DefaultActionMenuRender,
    tool: ActionMenuList
  },
  Toolbar: {
    render: DefaultToolbarRender,
    tool: Toolbar
  },
  LinkTool: {
    render: DefaultLinkToolRender,
    tool: LinkTool
  }
}

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight]

const BlogEditor = (): React.ReactElement => {
  const [value, setValue] = useState(WITH_BASIC_INIT_VALUE)
  const editor = useMemo(() => createYooptaEditor(), [])
  const selectionRef = useRef(null)
  const pluginsHack = plugins as unknown as any

  const onChange = (newValue: YooptaContentValue, options: YooptaOnChangeOptions): void => {
    setValue(newValue)
  }

  const serializeHTML = (): void => {
    const data = editor.getEditorValue()
    const htmlString = html.serialize(editor, data)
    console.log('html string', htmlString)
  }

  const serializeMd = (): void => {
    const data = editor.getEditorValue()
    const mdString = markdown.serialize(editor, data)
    console.log('md\n', mdString)
  }

  return (
    <div ref={selectionRef}>
      <YooptaEditor
        style={{ width: '100%' }}
        editor={editor}
        plugins={pluginsHack}
        tools={TOOLS}
        marks={MARKS}
        selectionBoxRoot={selectionRef}
        value={value}
        onChange={onChange}
        autoFocus
      />
      <button onClick={serializeHTML}>Serialize from content to html</button>
      <button onClick={serializeMd}>Serialize from content to markdown</button>
    </div>
  )
}

export default BlogEditor
