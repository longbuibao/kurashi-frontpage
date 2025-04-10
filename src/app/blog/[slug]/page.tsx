import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import Container from '@/app/_components/container'
import { PostBody } from '@/app/_components/post-body'
import Image from 'next/image'
import { LinkIcon, LogoFacebook, LogoZalo } from '@/components/svg-icons'
import Avatar from '@/app/_components/avatar'
import './style.css'

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
          {/* <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
          <PostBody content={post.content} /> */}
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
                  </div>
                  <div>
                    <div className='hidden md:block md:mb-12'>
                      <Avatar name={post.author.name} picture={post.author.picture} />
                    </div>
                    <p className='text-black'>{post.date.toString()}</p>
                    <div className='flex flex-row gap-3 flex-nowrap items-center mt-3'>
                      <LogoFacebook />
                      <LogoZalo />
                      <LinkIcon />
                    </div>
                  </div>
                </div>
                <div className='md:w-full'>
                  <Image className='h-full' alt='blog phụ kiện nam châm' src={post.coverImage.replace('/public', '')} width={640} height={640} />
                </div>
              </div>
            </div>
            <div className='my-10'>
              <PostBody content={post.content} />
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
