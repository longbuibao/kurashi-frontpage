'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

import './pagination-bar.css'

interface PaginationBarProps {
  maxPages: number
}

const PaginationBar: React.FC<PaginationBarProps> = ({ maxPages }) => {
  const routerPathname = usePathname()
  const router = useRouter()

  const page = parseInt(routerPathname.at(routerPathname.length - 1) ?? '0')
  const [currentPage, setCurrentPage] = React.useState(page)
  const items = []
  let leftSide = currentPage - 1
  if (leftSide <= 0) leftSide = 0
  let rightSide = currentPage + 1
  if (rightSide > maxPages) rightSide = maxPages

  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <div
        key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')}
        onClick={() => {
          router.push(`/blogs/${number}`)
          setCurrentPage(number)
        }}
      >
        <Link href={`/blogs/${number}`}>{number + 1}</Link>
      </div>
    )
  }
  const nextPage = (): void => {
    if (currentPage < maxPages) {
      router.push(`/blogs/${currentPage + 1}`)
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = (): void => {
    if (currentPage >= 1) {
      router.push(`/blogs/${currentPage - 1}`)
      setCurrentPage(currentPage - 1)
    }
  }

  const paginationRender = (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex'>
        <div className='round-effect' onClick={prevPage}> &lsaquo; </div>
        {items}
        <div className='round-effect' onClick={nextPage}> &rsaquo; </div>
      </div>
    </div>
  )
  return (paginationRender)
}

export default PaginationBar
