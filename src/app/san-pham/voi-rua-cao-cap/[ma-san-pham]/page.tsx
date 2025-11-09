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
      <div className='border border-kurashi-border flex flex-row gap-10 items-center p-3 max-md:w-fit'>
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
      productIntro: true,
      category: true,
      secondaryCategory: true,
      finish: true
    }
  })

  if (product === null) return <div>not found product {productId}</div>

  const steps = [
    { summary: 'Tích hợp phụ kiện', thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/tich-hop-phu-kien.webp', label: 'TÍCH HỢP PHỤ KIỆN', title: 'PHỤ KIỆN NAM CHÂM', content: 'Tấm ốp tường hút nam châm cho phép gắn, tháo và di chuyển phụ kiện từ tính tự do mà không cần khoan, giúp bề mặt tường luôn nguyên vẹn.' },
    { summary: 'chống ố', thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/chong-o.webp', label: 'CHỐNG Ố', title: 'KHÓ BÁM BẨN', content: 'Bề mặt hard coating chống bám dầu mỡ và bụi bẩn, giúp lau chùi nhanh chóng, đặc biệt phù hợp cho khu bếp thường xuyên có nhiều vết bẩn.' },
    { summary: 'Dễ thi công', thumbnail: 'https://storage.googleapis.com/kurashi_frontpage_files/images/tam-op-tuong-nam-cham/de-thi-cong.webp', label: 'DỄ THI CÔNG', title: 'DỄ THI CÔNG', content: 'Tấm ốp tường hút nam châm có trọng lượng nhẹ hơn nhiều so với ốp đá tự nhiên, dễ cắt ghép và thi công, giúp giảm đáng kể chi phí nhân công và thời gian lắp đặt.' }
  ]

  const cadImages = product.productImages.filter(x => x.isCadImage)
  const mobileHero = product.productImages.filter(x => x.isMobileImage)

  return (
    <div className='w-full'>
      <div className='bg-cover bg-no-repeat bg-center w-full h-[60vh] relative max-md:hidden'>
        <Image className='object-cover' src={product.thumbnail} fill alt={product.name} />
      </div>
      <div className='relative h-[60vh] hidden max-md:block'>
        <Image src={mobileHero[0].mobileImageUrl} alt={mobileHero[0].content} fill />
      </div>
      <div className='my-20'>
        <div className='text-[#6D6E71] flex flex-col gap-10 w-[60%] max-md:w-4/5 mx-auto'>
          <div className='text-3xl font-bold w-4/5 max-md:w-full max-md:mx-auto max-md:text-2xl max-md:text-center'>
            {product.name.toUpperCase()}
          </div>
          <div className='max-md:text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis veniam, ipsa, fugit ex unde dignissimos incidunt similique distinctio quis quos eveniet voluptatibus est aliquam. Harum eveniet earum maxime architecto reprehenderit.
          </div>
        </div>
        <div className='flex flex-row justify-center mt-16 gap-20 max-md:gap-10 w-4/5 mx-auto items-stretch max-md:flex-col'>
          <div className='w-[30%] max-md:w-full'>
            <EmblaCarouselWithThumbnail slides={images} options={{}} />
          </div>
          <div className='w-1/3 flex flex-col justify-between'>
            <div className='text-[#6D6E71] pb-10 border-b-[0.5px] border-secondary-opacity'>
              {product.productIntro.filter(x => x.isMainIntro)[0].content}
            </div>
            <div className='grid grid-cols-2 grid-rows-7 gap-5'>
              <div className='bg-red-200 flex items-center justify-start font-bold text-[#6D6E71]'>Thông tin</div>
              <div className='bg-green-200 flex items-center justify-start font-bold text-[#6D6E71]'>Chi tiết</div>
              <div className='bg-blue-200 flex items-center justify-start'>Mã sản phẩm</div>
              <div className='bg-yellow-200 flex items-center justify-start'>4</div>
              <div className='bg-purple-200 flex items-center justify-start'>Loại</div>
              <div className='bg-pink-200 flex items-center justify-start'>6</div>
              <div className='bg-orange-200 flex items-center justify-start'>Chất liệu</div>
              <div className='bg-lime-200 flex items-center justify-start'>8</div>
              <div className='bg-teal-200 flex items-center justify-start'>Bề mặt</div>
              <div className='bg-sky-200 flex items-center justify-start'>10</div>
              <div className='bg-amber-200 flex items-center justify-start'>Xuất xứ</div>
              <div className='bg-indigo-200 flex items-center justify-start'>12</div>
              <div className='bg-rose-200 flex items-center justify-start'>Bảo hành</div>
              <div className='bg-slate-200 flex items-center justify-start'>14</div>
            </div>

            <div className='justify-self-end'>
              <div className='grid grid-cols-2'>
                <div>Giá niêm yết</div>
                <div className='flex flex-row gap-5'>
                  <div className='text-main'>{formatCurrency(product.price)}</div>
                  <div>(chưa VAT)</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='w-[60%] max-md:w-4/5 mx-auto mt-28 mb-20'>
        <div className='pl-3 border-l-2 border-black text-black text-xl '>
          {'Công nghệ nổi bật'.toUpperCase()}
        </div>
        <div className='w-4/5 mx-auto py-20 max-md:py-0'>
          <KurashiSlider steps={steps} />
        </div>
      </div>
      <div className='w-[60%] max-md:w-4/5 mx-auto my-10'>
        <div className='pl-3 border-l-2 border-black text-black text-xl'>
          {'Cấu tạo'.toUpperCase()}
        </div>
        <div className='relative w-1/2 my-20 mx-auto max-md:w-full'>
          <Image className='object-fill aspect-[1.31166518255]' src={cadImages[0].imageUrl} width={1473} height={1123} alt={cadImages[0].content} />
        </div>
      </div>
      <div className='w-[60%] max-md:w-4/5 mx-auto mt-10 mb-1'>
        <div className='pl-3 border-l-2 border-black text-black text-xl'>
          {'Tải dữ liệu'.toUpperCase()}
        </div>
        <div className='flex flex-row gap-10 my-10 max-md:flex-col'>
          <DownloadLink title='Bản vẽ sản phẩm (PDF)' url='#' />
          <DownloadLink title='Bản vẽ sản phẩm (DXF)' url='#' />
        </div>
      </div>
      <div className='w-[60%] mx-auto max-md:w-full'>
        <SanPhamLienQuan className='my-24 max-md:mt-20 max-md:mb-16 max-md:text-center' />
      </div>
    </div>
  )
}

export default Page
