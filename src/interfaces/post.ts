import { type Author } from './author'

export interface Post {
  slug: string
  title: string
  date: Date
  coverImage: any
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  preview?: boolean
  isReadyForPublish?: boolean
  faq?: Array<{ q: string, a: string }>
  videoLinks: Array<{
    youTubeLink: string
  }>
  fileName: string
}
