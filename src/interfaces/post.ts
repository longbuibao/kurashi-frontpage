import { type Author } from './author'

export interface Post {
  slug: string
  title: string
  date: Date
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  preview?: boolean
}
