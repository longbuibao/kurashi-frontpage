import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { UrlObject } from 'url'

interface Props {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props): React.ReactElement => {
  const image = (
    <Image
      src={src.replace('/public', '')}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className='sm:mx-0'>
      {slug !== null || slug !== undefined
        ? (
          <Link href={`/posts/${slug ?? ''}` as any as UrlObject} aria-label={title}>
            {image}
          </Link>
          )
        : (
            image
          )}
    </div>
  )
}

export default CoverImage
