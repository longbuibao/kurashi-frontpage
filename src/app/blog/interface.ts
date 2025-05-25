export interface BlogPost {
  slug: string
  category: string
  subcategory: string[]
  title: string
  excerpt: string
  coverImage: any
  date: Date
  author: {
    name: string
    picture: string
  }
  ogImage: {
    url: string
  }
  content: string
  fileName: string
  isSmallCard?: boolean
  isReadyForPublish?: boolean
}
