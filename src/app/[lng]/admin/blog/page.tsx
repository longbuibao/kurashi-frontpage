import React from 'react'
import Link from 'next/link'

const Page: React.FC = () => {
  return (
    <div>
      <Link href='/admin/blog/create-new-blog'>CREATE NEW BLOG</Link>
    </div>
  )
}

export default Page
