'use client'
import { useEffect, useRef, useState } from 'react'
import './post-body.css'

interface TableOfContentsProps {
  html: string
}

export function TableOfContents ({ html }: TableOfContentsProps): React.ReactElement {
  const [visible, setVisible] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<string | number>('auto')
  useEffect(() => {
    if (contentRef.current != null) {
      if (visible) {
        const scrollHeight = contentRef.current.scrollHeight
        setHeight(scrollHeight)
      } else {
        setHeight(0)
      }
    }
  }, [visible])

  return (
    <div className='my-4 border border-kurashi-border rounded-md shadow-sm w-full'>
      <div className='flex flex-row justify-between items-center px-4 text-secondary bg-main opacity-90'>
        <button onClick={() => setVisible((v) => !v)} className='flex flex-row gap-3 items-center'>
          <i className='fa-solid fa-bars' />
          <div>Nội dung chính</div>
        </button>
        <button onClick={() => setVisible((v) => !v)} className='w-fit px-4 py-1 bg-gray-100 text-left font-medium text-gray-700 hover:bg-gray-200 transition'>
          {visible ? '[Ẩn]' : '[Hiện]'}
        </button>
      </div>
      <div
        ref={contentRef}
        className='transition-all duration-500 ease-in-out opacity-100'
        style={{
          maxHeight: visible ? height : 0,
          opacity: visible ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 500ms ease-in-out'
        }}
      >
        <div
          className='p-4 toc'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
