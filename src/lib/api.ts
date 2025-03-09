import { Post } from '@/interfaces/post'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs (): any {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug (slug: string): Post | null {
  if (slug === '.gitkeep') {
    return null
  }
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { ...data, slug: realSlug, content } as any as Post
}

export function getAllPosts (): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug: any) => getPostBySlug(slug))
    .filter((x: any) => x !== null)
    .sort((post1: any, post2: any) => (post1.date > post2.date ? -1 : 1))
  return posts
}
