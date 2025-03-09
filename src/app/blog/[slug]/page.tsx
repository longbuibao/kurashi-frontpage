import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import Container from '@/app/_components/container'
import { PostBody } from '@/app/_components/post-body'
import { PostHeader } from '@/app/_components/post-header'

export default async function Post (props: Params): Promise<React.ReactElement> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (post === null || post === undefined) {
    return notFound()
  }

  return (
    <main>
      <Container>
        <article className='mb-32'>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </main>
  )
}

interface Params {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata (props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (post === null || post === undefined) {
    return notFound()
  }

  const title = `${post.title}`

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage?.url]
    }
  }
}

export async function generateStaticParams (): Promise<any> {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug
  }))
}
