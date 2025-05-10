import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import Container from '@/app/_components/container'
import { PostBody } from '@/app/_components/post-body'
import Image from 'next/image'
import { CopyButton, ShareFacebookWrapper } from '@/components/share-button'

import './style.css'

export default async function Post (props: Params): Promise<React.ReactElement> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post?.title,
    description: post?.title,
    author: {
      '@type': 'Person',
      name: 'Diện Võ'
    },
    mainEntityOfPage: `https://www.kurashi.com.vn/blog/${(post as any).fileName}`,
    datePublished: post?.date.toLocaleDateString()
  }

  if (post === null || post === undefined) {
    return notFound()
  }

  return (
    <main>
      <Container>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className='mb-32'>
          <div className='my-10 max-md:w-full'>
            <div className='w-[80%] mx-auto max-md:w-full max-md:p-5'>
              <div className='flex flex-row gap-10 text-black max-md:flex-col'>
                <div className='w-3/5 md:w-full flex justify-between flex-col max-md:w-full'>
                  <div>
                    <div className='flex flex-row gap-5 items-center'>
                      <i className='fa-solid fa-square-full text-main' />
                      <p className='text-black'>Kurashi blog</p>
                    </div>
                    <h1 className='text-2xl font-bold mt-10'>{post.title.toUpperCase()}</h1>
                    <div className='mt-4'>{post.excerpt}</div>
                  </div>
                  <div className='flex flex-col justify-center max-md:mt-10'>
                    <div className='max-md:mb-2'>
                      <p className='uppercase text-[rgb(134,135,135)] font-semibold text-xs'>{post.date.toLocaleString('default', { month: 'short' })} {post.date.toLocaleString('default', { day: 'numeric' })} • {post.author.name}</p>
                    </div>
                    <div className='flex flex-row gap-3 flex-nowrap items-center mt-3'>
                      <ShareFacebookWrapper url={`https://kurashi.com.vn/blog/${(post as any).fileName}`} />
                      <CopyButton url={`https://kurashi.com.vn/blog/${(post as any).fileName}`} />
                    </div>
                  </div>
                </div>
                <div className='md:w-full'>
                  <Image className='h-full' alt='blog phụ kiện nam châm' src={post.coverImage.coverImage.replace('/public', '')} width={640} height={640} />
                </div>
              </div>
            </div>
            <div className='my-10'>
              <PostBody post={post} />
            </div>
          </div>
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
      images: [post.ogImage?.url.replace('/public', '')]
    }
  }
}

export async function generateStaticParams (): Promise<any> {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug
  }))
}
