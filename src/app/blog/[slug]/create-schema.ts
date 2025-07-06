import { Post } from '@/interfaces/post'

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/videos'

const extractYouTubeVideoIds = (links: string[]): string[] =>
  links
    .map(link => {
      const match = link.match(/(?:youtube\.com\/(?:.*v=|v\/|embed\/|shorts\/)|youtu\.be\/)([0-9A-Za-z_-]{11})/)
      return match?.[1] ?? null
    })
    .filter(Boolean) as string[]

const buildVideoSchema = (video: any): any => {
  const snippet = video.snippet
  const id = video.id
  const duration = video.contentDetails.duration

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: snippet.title,
    description: snippet.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
    duration,
    contentUrl: `https://www.youtube.com/watch?v=${id}`,
    embedUrl: `https://www.youtube.com/embed/${id}`,
    uploadDate: snippet.publishedAt,
    potentialAction: {
      '@type': 'SeekToAction',
      target: `https://youtu.be/${id}?t={seek_to_second_number}`,
      'startOffset-input': 'required name=seek_to_second_number'
    }
  }
}

const fetchYouTubeSchemas = async (videoIds: string): Promise<any[]> => {
  if (!videoIds) return []

  const response = await fetch(
    `${YOUTUBE_API_URL}?part=snippet,contentDetails&id=${videoIds}&key=${YOUTUBE_API_KEY}`
  )
  const data = await response.json()

  return (data.items || []).map(buildVideoSchema)
}

export const createSchema = async (post: Post | null): Promise<any> => {
  if (post === null) return []

  const schemas: any[] = []
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.title,
    author: {
      '@type': 'Person',
      name: 'Diện Võ'
    },
    mainEntityOfPage: `https://www.kurashi.com.vn/blog/${post.fileName}`,
    datePublished: post.date.toISOString()
  })

  if ((post.faq != null) && post.faq.length > 0) {
    const faqItems = post.faq
      .filter(x => x.q && x.a)
      .map(x => ({
        '@type': 'Question',
        name: x.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: x.a
        }
      }))

    if (faqItems.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems
      })
    }

    if (post.videoLinks && post.videoLinks.length > 0) {
      const ids = extractYouTubeVideoIds(post.videoLinks.map(v => v.youTubeLink))
      const idString = ids.join(',')
      const videoSchemas = await fetchYouTubeSchemas(idString)
      schemas.push(...videoSchemas)
    }
  }

  return schemas
}
