import React from 'react'
import { BlogEditor } from '@/components/blog-editor'

import prisma from '@/lib/prisma'

const Page: React.FC = async () => {
  const authors = await prisma.user.findMany({ where: { isBlogAuthor: true } })
  return (
    <div className='w-full p-10'>
      <BlogEditor authors={authors.map(x => x.name !== null ? { name: x.name } : { name: 'null' })} />
    </div>
  )
}

export default Page
