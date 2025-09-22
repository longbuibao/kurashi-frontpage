import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import prisma from '@/lib/prisma'
import { EmblaCarouselWithThumbnail } from '@/components/embla-carousel'
import { formatCurrency } from '@/utils'
import { UrlObject } from 'url'

interface PageProps {
  params: Promise<{ 'ma-san-pham': string }>
}

const DownloadLink: React.FC<{ title: string, url: string }> = ({ title, url }) => {
  return (
    <Link href={url as any as UrlObject}>
      <div className='border border-main flex flex-row gap-10 items-center p-3'>
        <div>{title}</div>
        <i className='fa-solid fa-chevron-right' />
      </div>
    </Link>
  )
}

const images = [
  { imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/test-product/voi-rua-product-image.png', key: '1', index: 0 },
  { imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/test-product/voi-rua-product-image.png', key: '2', index: 1 },
  { imageUrl: 'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/test-product/voi-rua-product-image.png', key: '3', index: 2 }
].map(x => {
  return {
    key: x.key,
    index: x.index,
    content: (
      <Image src={x.imageUrl} width={696} height={696} alt='Vòi rửa' />
    )
  }
})

export async function generateStaticParams (): Promise<any> {
  const products = await prisma.product.findMany({
    where: {
      category: {
        categoryUniqueName: 'voi-rua'
      }
    }
  })
  return products.map(x => { return { 'ma-san-pham': x.uniqueName } })
}

const Page: React.FC<PageProps> = async (props) => {
  const params = await props.params
  const productId = params['ma-san-pham']
  const product = await prisma.product.findUnique({
    where: { uniqueName: productId },
    include: {
      productImages: true,
      productIntro: true
    }
  })

  if (product === null) return <div>not found product {productId}</div>

  return (
    <div className='w-full'>
      <div className='bg-cover bg-no-repeat bg-center h-96 w-full' style={{ backgroundImage: `url(${product.thumbnail})` }}>
        <div className='w-1/2 mx-auto flex flex-col gap-10 font-bold'>
          <div className='text-7xl text-secondary pt-20'>
            {product.name}
          </div>
          <div className='text-secondary text-2xl'>
            {product.shortIntro}
          </div>
        </div>
      </div>
      <div className='mx-auto w-1/2 flex flex-row justify-between items-center gap-20'>
        <div className='w-1/2 p-3'>
          <EmblaCarouselWithThumbnail slides={images} options={{}} />
        </div>
        <div className='w-1/2'>
          <div className='border-b-[0.5px] border-secondary-opacity pb-10'>
            <div className='text-3xl font-bold'>
              {product.name.toUpperCase()}
            </div>
            <div className='mt-10'>
              <div>Mã số: {product.idToShowUser}</div>
              <div>Giá niêm yết: VND {formatCurrency(product.price)} (chưa VAT)</div>
            </div>
          </div>
          <div className='mt-10 flex flex-col gap-3'>
            {product.productIntro.filter(x => !x.isMainIntro).map(x => (
              <div key={x.content} className='flex flex-row gap-3 items-center'>
                <i className='fa-solid fa-circle opacity-50' />
                <div>
                  {x.content}
                </div>
              </div>
            ))}
          </div>
          <div className='p-2 my-10 justify-center w-full flex flex-row items-center gap-3 bg-main text-secondary'>
            Liên hệ
            <i className='fa-solid fa-chevron-right' />
          </div>
        </div>
      </div>
      <div className='w-1/2 mx-auto my-10'>
        <div className='pl-3 border-l-2 border-black text-black text-xl'>
          {'Công nghệ nổi bật'.toUpperCase()}
        </div>
        <div className='grid grid-rows-2 grid-cols-2 my-10'>
          {product.productIntro.filter(x => x.isMainIntro).map(x => {
            return (
              <div className='flex flex-row items-center justify-center gap-10 m-7' key={x.id}>
                <Image className='w-1/3 self-start' src={x.introImg as any as string} width={50} height={50} alt='Chức năng' />
                <div className='flex flex-col gap-5'>
                  <div className='text-xl'>{x.title}</div>
                  <div>{x.content}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='w-1/2 mx-auto mt-10'>
        <div className='pl-3 border-l-2 border-black text-black text-xl'>
          {'Tải dữ liệu'.toUpperCase()}
        </div>
        <div className='flex flex-row gap-10 my-10'>
          <DownloadLink title='Bản vẽ sản phẩm (PDF)' url='#' />
          <DownloadLink title='Bản vẽ sản phẩm (DXF)' url='#' />
        </div>
      </div>
      <div className='w-1/2 mx-auto my-10'>
        <div className='pl-3 border-l-2 border-black text-black text-xl'>
          {'Cấu tạo'.toUpperCase()}
        </div>
      </div>
    </div>
  )
}

export default Page
