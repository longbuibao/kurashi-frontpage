'use client'
import YooptaEditor, {
  createYooptaEditor,
  YooptaContentValue,
  YooptaOnChangeOptions,
  PluginElementRenderProps
} from '@yoopta/editor'
import { html } from '@yoopta/exports'
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
import { useForm } from 'react-hook-form'
import { CreateBlogSchema } from '@/schema'
import * as z from 'zod'
import { createBlog } from '@/actions/create-blog'
import { useMemo, useRef, useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormError, FormSuccess } from '@/components/form'
import { ClipLoader } from 'react-spinners'

interface BlogEditorProps {
  authors: Array<{ name: string }>
}

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

const BlogEditor: React.FC<BlogEditorProps> = ({ authors }) => {
  const [value, setValue] = useState<YooptaContentValue>({})
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()
  const editor = useMemo(() => createYooptaEditor(), [])
  const selectionRef = useRef(null)
  const pluginsHack = plugins as unknown as any

  const onChange = (newValue: YooptaContentValue, options: YooptaOnChangeOptions): void => {
    setValue(newValue)
  }

  const form = useForm<z.infer<typeof CreateBlogSchema>>({
    resolver: zodResolver(CreateBlogSchema)
  })

  const onSubmit = (values: z.infer<typeof CreateBlogSchema>): void => {
    console.log('??')
    const data = editor.getEditorValue()
    const htmlString = html.serialize(editor, data)
    setError('')
    setSuccess('')
    startTransition(() => {
      createBlog(htmlString, values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((e) => console.log(e))
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-5'>
      <div>Nhập content vào ô bên dưới</div>
      <div ref={selectionRef} className='border border-blog'>
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
          readOnly={isPending}
        />
      </div>
      <div>
        <label>Chọn tên tác giả</label>
        <select disabled={isPending} {...form.register('authorName', { required: true })} className='border border-blog'>
          {authors.map((x, i) => <option key={x.name} value={x.name}>{x.name}</option>)}
        </select>
      </div>
      <div>
        <label>Nhập title cho bài viết</label>
        <input className='p-1 border-b rounded-sm border-secondary' type='text' {...form.register('title', { required: true })} />
      </div>
      <div>
        <label title='Đây sẽ là tên file .html được lưu trên mây. Tên file phải unique'>Nhập tên file</label>
        <input className='p-1 border-b rounded-sm border-secondary' disabled={isPending} placeholder='Tên' {...form.register('fileName', { required: true })} />
      </div>
      <div>
        <label title='Thumbnail cho blog (kích thước 300x300)'>Chọn file ảnh cho thumbnail (kích thước 300x300, GIF, JPEG, PNG, WebP)</label>
        <input className='p-1 border-b rounded-sm border-secondary' type='file' {...form.register('thumbnail', { required: true })} />
      </div>
      <button type='submit' aria-disabled={isPending} className='w-fit'>
        <div>
          {!isPending
            ? (
              <div className='flex flex-row text-secondary bg-main px-3 py-2 rounded-lg'>
                <div>Tạo</div>
              </div>)
            : <div className='w-full h-full'><ClipLoader color='#437254' loading speedMultiplier={2} size={15} /></div>}
        </div>
      </button>
      <FormError message={error} />
      <FormSuccess message={success} />
    </form>

  )
}

export default BlogEditor
