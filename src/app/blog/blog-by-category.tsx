'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { BlogRegister } from '@/components/blog-register'
import Link from 'next/link'
import Image from 'next/image'

import { BlogPost } from './interface'

const Navigator = ({ label, isSelected, onClick }: { label: string, isSelected: boolean, onClick: () => void }): React.ReactElement => {
  const className = isSelected
    ? 'bg-blog text-black px-4 py-1 rounded-sm text-sm font-medium'
    : 'px-4 py-1 text-sm font-medium text-[rgb(134,135,135)]'

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  )
}

const BlogCardByCategory: React.FC<BlogPost> = ({ coverImage, title, excerpt, date, author, fileName }) => {
  if (coverImage !== undefined && coverImage.coverImage) {
    return (
      <Link href={`/blog/${fileName}`}>
        <div>
          <Image className='object-cover flex-shrink-0 rounded-sm' src={coverImage.coverImage?.replace('/public', '')} alt='test' width={300} height={100} />
          <div className='w-60'>
            <p className='font-bold text-lg my-3 max-md:line-clamp-1'>{title}</p>
            <p className='text-sm my-3 line-clamp-1'>{excerpt}</p>
            <p className='uppercase text-[rgb(134,135,135)] font-semibold text-xs'>{date.toLocaleString('default', { month: 'short' })} {date.toLocaleString('default', { day: 'numeric' })}, {date.toLocaleDateString('default', { year: 'numeric' })} • {author.name}</p>
          </div>
        </div>
      </Link>
    )
  }
}

function slugifyVietnamese (str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\\-]/g, '')
}

const POSTS_PER_PAGE = 4

const BlogCategoryFilter: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const category = searchParams.get('danh-muc')?.toLowerCase() || 'tat-ca'
  const normalizedSelected = slugifyVietnamese(category)

  const categories = useMemo(() => {
    const set = new Set<string>()
    posts.forEach(post => set.add(post.category))
    return Array.from(set)
  }, [posts])

  const filtered = normalizedSelected === 'tat-ca'
    ? posts
    : posts.filter(p => slugifyVietnamese(p.category) === normalizedSelected)

  return (
    <>
      <div className='border-t-[1px] border-kurashi-border-color my-5'>
        <div className='border-[1px] border-kurashi-border-color my-10 w-fit rounded-md p-1 flex flex-wrap gap-2'>
          <Navigator
            label='Tất cả'
            isSelected={slugifyVietnamese(category) === 'tat-ca'}
            onClick={() => router.push((`${pathname}?danh-muc=tat-ca` as any), { scroll: false })}
          />
          {categories.map(cat => {
            const slug = slugifyVietnamese(cat)
            return (
              <Navigator
                key={cat}
                label={cat}
                isSelected={slugifyVietnamese(category) === slug}
                onClick={() => router.push((`${pathname}?danh-muc=${slug}` as any), { scroll: false })}
              />
            )
          })}
        </div>
      </div>

      <div className='flex flex-row justify-between gap-5 max-md:flex-col'>
        <div className='grid grid-rows-3 grid-cols-2 gap-10 max-md:flex max-md:flex-wrap'>
          {filtered.map(post => (
            <BlogCardByCategory {...post} key={post.fileName} />
          ))}
        </div>
        <div className='w-[30%] max-md:w-full'>
          <BlogRegister />
        </div>
      </div>
    </>
  )
}

export default BlogCategoryFilter
