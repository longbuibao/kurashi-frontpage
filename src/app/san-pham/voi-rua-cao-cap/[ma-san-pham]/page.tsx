import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import prisma from '@/lib/prisma'
import { EmblaCarouselWithThumbnail } from '@/components/embla-carousel'
import { formatCurrency } from '@/utils'
import { UrlObject } from 'url'
import { KurashiSlider } from '@/components/kurashi-slider'
import { SanPhamLienQuan } from '@/components/san-pham-lien-quan'

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

  const steps = [
    { summary: 'Tích hợp phụ kiện', thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/tich-hop-phu-kien.webp', label: 'TÍCH HỢP PHỤ KIỆN', title: 'PHỤ KIỆN NAM CHÂM', content: 'Tấm ốp tường hút nam châm cho phép gắn, tháo và di chuyển phụ kiện từ tính tự do mà không cần khoan, giúp bề mặt tường luôn nguyên vẹn.' },
    { summary: 'chống ố', thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/chong-o.webp', label: 'CHỐNG Ố', title: 'KHÓ BÁM BẨN', content: 'Bề mặt hard coating chống bám dầu mỡ và bụi bẩn, giúp lau chùi nhanh chóng, đặc biệt phù hợp cho khu bếp thường xuyên có nhiều vết bẩn.' },
    { summary: 'Dễ thi công', thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/de-thi-cong.webp', label: 'DỄ THI CÔNG', title: 'DỄ THI CÔNG', content: 'Tấm ốp tường hút nam châm có trọng lượng nhẹ hơn nhiều so với ốp đá tự nhiên, dễ cắt ghép và thi công, giúp giảm đáng kể chi phí nhân công và thời gian lắp đặt.' }
  ]

  return (
    <div className='w-full'>
      <div className='bg-cover bg-no-repeat bg-center w-full h-[60vh] relative'>
        <Image className='object-cover' src={product.thumbnail} fill alt={product.name} />
      </div>
      <div className='my-20'>
        <div className='text-[#6D6E71] flex flex-col gap-10 w-[50%] mx-auto'>
          <div className='text-3xl font-bold w-4/5'>
            {product.name.toUpperCase()}
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis veniam, ipsa, fugit ex unde dignissimos incidunt similique distinctio quis quos eveniet voluptatibus est aliquam. Harum eveniet earum maxime architecto reprehenderit.
          </div>
        </div>
        <div className='flex flex-row justify-center mt-16 gap-20 w-4/5 mx-auto items-stretch'>
          <div className='w-[40%]'>
            <EmblaCarouselWithThumbnail slides={images} options={{}} />
          </div>
          <div className='h-full'>
            <div className='border-b-[0.5px] border-secondary-opacity pb-10'>
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
          </div>
        </div>
      </div>
      <div className='w-4/5 mx-auto my-20'>
        <div className='pl-3 border-l-2 border-black text-black text-xl'>
          {'Công nghệ nổi bật'.toUpperCase()}
        </div>
        <div className='w-4/5 mx-auto py-20'>
          <KurashiSlider steps={steps} />
        </div>
      </div>
      <div className='w-4/5 mx-auto mt-10'>
        <div className='pl-3 border-l-2 border-black text-black text-xl'>
          {'Tải dữ liệu'.toUpperCase()}
        </div>
        <div className='flex flex-row gap-10 my-10'>
          <DownloadLink title='Bản vẽ sản phẩm (PDF)' url='#' />
          <DownloadLink title='Bản vẽ sản phẩm (DXF)' url='#' />
        </div>
      </div>
      <div className='w-4/5 mx-auto my-10'>
        <div className='pl-3 border-l-2 border-black text-black text-xl'>
          {'Cấu tạo'.toUpperCase()}
        </div>
      </div>
      <div className='w-4/5 mx-auto my-10'>
        <SanPhamLienQuan />
      </div>
    </div>
  )
}

export default Page
