import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { EmblaCarousel } from '@/components/embla-carousel'
import { LogoTradeMark } from '@/components/logo'
import { GoldenCollection } from '@/components/golden-collection'
import { SanPhamLienQuan } from '@/components/san-pham-lien-quan'
import prisma from '@/lib/prisma'
import { CategoryItem } from '@/components/category-item'
import LoadingSpinner from '../phu-kien-bep/accessories-product-skeleton'
import { ProductVoiRuaCard } from '@/components/product'
import { imageUrls as c, kieuDang } from './const'

export async function generateMetadata (): Promise<Metadata> {
  const title = 'Vòi rửa cao cấp Nhật Bản | Kurashi'
  const description =
    'Bộ sưu tập vòi rửa cao cấp hand-made KURASHI với công nghệ PVD và bề mặt cao cấp. Vòi lavabo & vòi rửa chén Nhật Bản, sang trọng, bền bỉ, tiết kiệm nước, bảo hành chính hãng. Made in Japan, 146 năm kinh nghiệm.'
  const keywords = [
    'vòi rửa cao cấp',
    'vòi lavabo cao cấp',
    'vòi rửa chén cao cấp',
    'vòi rửa Nhật Bản',
    'vòi rửa Kurashi',
    'vòi rửa PVD',
    'vòi rửa hand-made',
    'vòi lavabo',
    'vòi rửa chén',
    'phụ kiện bếp cao cấp',
    'vòi nước Nhật Bản',
    'vòi rửa sang trọng',
    'Kurashi'
  ]

  const ogImage =
    'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-dung-1.webp'
  const canonicalUrl = '/san-pham/voi-rua-cao-cap'

  return {
    title,
    description,
    keywords,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
      siteName: 'Kurashi',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Vòi rửa cao cấp Kurashi - Made in Japan'
        }
      ],
      locale: 'vi_VN'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@kurashi'
    }
  }
}

const imageUrls = c.map((x) => {
  return {
    key: x.url,
    content: <Image src={x.url} width={600} height={600} alt={x.alt} />
  }
})

const kieuDangImages = kieuDang.map((x) => {
  return {
    key: x.url,
    content: <Image src={x.url} width={600} height={600} alt={x.alt} />
  }
})

const AllProducts: React.FC = async () => {
  const products = await prisma.product.findMany({
    where: {
      isAvailable: true,
      categoryId: {
        in: ['f051e783-1535-4822-a78c-341e28b92457']
      }
    },
    include: {
      productImages: true,
      productIntro: true,
      category: true,
      secondaryCategory: true,
      finish: true,
      material: true,
      productInterface: true
    }
  })

  return (
    <div className='grid grid-cols-3 grid-rows-3 w-full my-10 gap-20 max-md:gap-10 max-md:grid-cols-2'>
      {products
        .sort((a, b) => {
          return a.order > b.order ? 1 : -1
        })
        .map((x) => {
          return <ProductVoiRuaCard key={x.id} product={x as any} />
        })}
    </div>
  )
}

const Page: React.FC = async () => {
  const allCategoriesWithCount = await prisma.product.groupBy({
    by: ['categoryId'],
    where: {
      isAvailable: true,
      categoryId: {
        in: ['f051e783-1535-4822-a78c-341e28b92457']
      }
    },
    _count: {
      _all: true
    }
  })

  const categoriesWithNameAndThumbnail = await prisma.category.findMany({
    select: {
      name: true,
      thumbnail: true,
      id: true,
      order: true,
      categoryUniqueName: true
    }
  })

  const categories = allCategoriesWithCount.map((x) => {
    const count = x._count._all
    const category = categoriesWithNameAndThumbnail.find((y) => y.id === x.categoryId)

    return {
      count,
      name: category?.name,
      thumbnail: category?.thumbnail,
      key: category?.id,
      order: category?.order ?? 0,
      url: category?.categoryUniqueName ?? ''
    }
  })

  // Fetch products for structured data
  const products = await prisma.product.findMany({
    where: {
      isAvailable: true,
      categoryId: {
        in: ['f051e783-1535-4822-a78c-341e28b92457']
      }
    },
    include: {
      category: {
        select: {
          normalizedName: true
        }
      },
      secondaryCategory: {
        select: {
          normalizedName: true
        }
      },
      finish: {
        select: {
          normalizedName: true
        }
      }
    },
    take: 20
  })

  // Structured data for CollectionPage
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Vòi rửa cao cấp Nhật Bản | Kurashi',
    description:
      'Bộ sưu tập vòi rửa cao cấp hand-made KURASHI với công nghệ PVD và bề mặt cao cấp. Vòi lavabo & vòi rửa chén Nhật Bản, sang trọng, bền bỉ, tiết kiệm nước, bảo hành chính hãng.',
    url: 'https://kurashi.com.vn/san-pham/voi-rua-cao-cap',
    image:
      'https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-lavabo-dung-1.webp',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => {
        const categoryName = product.category?.normalizedName ?? ''
        const secondaryName = product.secondaryCategory?.normalizedName ?? ''
        const finish = product.finish?.normalizedName ?? ''
        const sku = product.sku ?? ''
        const productUrl = `${categoryName}-${secondaryName}-${finish}-${sku}`
        return {
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Product',
            name: product.name,
            image: product.thumbnail,
            url: `https://kurashi.com.vn/san-pham/voi-rua-cao-cap/${productUrl}`
          }
        }
      })
    },
    brand: {
      '@type': 'Brand',
      name: 'Kurashi'
    }
  }

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://kurashi.com.vn'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sản phẩm',
        item: 'https://kurashi.com.vn/san-pham'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Vòi rửa cao cấp',
        item: 'https://kurashi.com.vn/san-pham/voi-rua-cao-cap'
      }
    ]
  }

  return (
    <div className='leading-loose'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Image
        className='w-full h-auto max-md:hidden'
        src='/images/voi-rua-cao-cap-kurashi.svg'
        alt='Vòi rửa cao cấp Kurashi - Bộ sưu tập vòi lavabo và vòi rửa chén Nhật Bản'
        width={1920}
        height={900}
      />
      <Image
        className='w-full h-auto hidden max-md:block'
        src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/voi-rua-cao-cap-mobile.webp'
        alt='Vòi rửa cao cấp Kurashi - Bộ sưu tập vòi lavabo và vòi rửa chén Nhật Bản'
        width={1018}
        height={1351}
      />
      <div className='w-[70%] mx-auto max-md:w-full'>
        <h1 className='text-3xl my-20 max-md:mt-14 max-md:mb-10 max-md:text-nowrap max-md:text-2xl max-md:text-center'>
          VÒI RỬA CAO CẤP
        </h1>
        <p className='my-10 max-md:text-center max-md:mt-0 max-md:px-10'>
          Bộ sưu tập vòi hand-made KURASHI - PVD và bề mặt cao cấp. Vòi lavabo & vòi rửa chén Nhật
          Bản, sang trọng, bền bỉ, tiết kiệm nước, bảo hành chính hãng.
        </p>
        <div className='max-md:w-[100%] max-md:mx-auto'>
          <EmblaCarousel biggerSlider={false} slides={imageUrls} useFlatControlButton />
        </div>
        <div className='flex flex-row gap-10 items-center my-10 max-md:flex-col max-md:text-center max-md:justify-center '>
          <div className='flex flex-col h-full max-md:w-full max-md:items-center'>
            <div className='flex flex-col items-end gap-10 pb-10 h-full max-md:hidden'>
              <div className='font-gtFont text-3xl max-md:text-center max-md:w-full'>
                GOLD COLLECTION
              </div>
              <div className='text-3xl opacity-50 font-semibold text-[#6D6E71 ]'>
                {'Dấu ấn thượng lưu'.toUpperCase()}
              </div>
              <div className='w-full h-[0.5px] bg-[#6D6E71] opacity-20' />
              <div className='text-right max-md:text-center '>
                Bộ sưu tập là sự hòa quyện giữa nghệ thuật cổ điển và nét tinh giản hiện đại, mang
                đến vẻ thanh lịch vượt thời gian. Thiết kế linh hoạt cùng tông màu vàng kim được lựa
                chọn tỉ mỉ, hoàn thiện đến từng chi tiết, giúp sản phẩm nổi bật theo cách thật tinh
                tế, trở thành biểu tượng của phong cách sống thượng lưu.
              </div>
              <Link href='#' className='self-end mt-20 max-md:self-center max-md:mt-10'>
                <div className='bg-main text-secondary p-3 flex flex-row gap-3 items-center'>
                  Khám phá
                  <i className='fa-solid fa-chevron-right' />
                </div>
              </Link>
            </div>
            <GoldenCollection />
          </div>
          <Image
            className='max-md:hidden'
            src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/gold-collection.webp'
            width={451}
            height={721}
            alt='vòi rửa cao cấp golden collection'
          />
        </div>
        <div className='my-10 max-md:mt-28 max-md:mb-20'>
          <div className='text-3xl font-gtFont max-md:text-center'>MADE IN JAPAN</div>
          <div className='flex flex-row gap-40 mt-10 max-md:flex-col max-md:gap-14'>
            <Image
              className='w-1/2 max-md:w-full'
              alt='Vòi rửa Nhật Bản'
              width={300}
              height={325}
              src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua/made_in_japan.png'
            />
            <div className='flex flex-col gap-5 w-1/3 max-md:w-full max-md:items-center'>
              <div className='font-bold px-5'>
                <Image
                  className='max-md:hidden '
                  src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/lich-su-146-nam-voi-rua-kurashi.webp'
                  width={365}
                  height={252}
                  alt='vòi rửa nhật bản 146 năm'
                />
                <Image
                  className='max-md:block hidden'
                  src='https://storage.googleapis.com/kurashi_frontpage_files/images/voi-rua-cao-cap-rework/lich-su-146-nam-voi-rua-kurashi.webp'
                  width={300}
                  height={207}
                  alt='vòi rửa nhật bản 146 năm'
                />
              </div>
              <div className='mt-3 text-center leading-loose max-md:px-7'>
                Vòi KURASHI được đúc từ đồng nguyên khối, gia công cơ khí chính xác tại Nhật, sau đó
                được chà nhám thủ công tạo bề mặt mịn tinh tế. Lớp mạ PVD công nghệ Nhật hoàn thiện
                sang trọng. Cuối cùng, sản phẩm được lắp ráp và kiểm định nghiêm ngặt để đảm bảo
                chất lượng và độ bền.
              </div>
            </div>
          </div>
        </div>
        <div className='mt-40 max-md:mt-0'>
          <div className='flex flex-row items-center justify-center'>
            <LogoTradeMark width={82} height={82} />
            <div className='font-gtFont text-2xl'>SIGNATURE</div>
          </div>
          <div className='my-10 max-md:text-center max-md:px-7'>
            Mỗi chiếc vòi <span className='font-bold'>KURASHI</span> được tạo ra để phản chiếu phong
            cách sống riêng của bạn —{' '}
            <span className='font-bold'>khác biệt, tinh tế và có cá tính.</span> Không chỉ là một
            vật dụng, đó là <span className='font-bold'>dấu ấn trong từng khoảnh khắc</span> bạn
            chạm vào nước, nấu ăn hay bắt đầu ngày mới.
          </div>
          <div className='my-16'>
            <EmblaCarousel biggerSlider={false} slides={kieuDangImages} useFlatControlButton />
          </div>
        </div>
        <div className='mt-40 mb-10 max-md:my-20 max-md:w-4/5 max-md:mx-auto'>
          <div className='border-l-2 border-r-black font-bold px-5 text-2xl my-10 max-md:pl-3'>
            BỘ SƯU TẬP VÒI
          </div>
          <div className='my-10'>
            Bộ sưu tập vòi nước KURASHI - nơi tập hợp đầy đủ các mẫu vòi Nhật Bản chính hãng. Bạn có
            thể lọc nhanh theo loại sản phẩm (vòi lavabo hoặc vòi rửa chén) để tìm được mẫu phù hợp
            nhất.
          </div>
        </div>
        <div className='max-md:w-4/5 max-md:mx-auto'>
          <div className='flex flex-row gap-5 justify-start'>
            {categories
              .sort((x, y) => y.order - x.order)
              .map((category) => (
                <CategoryItem
                  url={category.url}
                  name={category.name ?? ''}
                  numberOfProducts={category.count ?? 0}
                  thumbnail={category.thumbnail ?? ''}
                  key={category.key}
                />
              ))}
          </div>
        </div>
        <div className='flex flex-row max-md:flex-col'>
          <div className='max-md:w-4/5 max-md:mx-auto'>
            <Suspense fallback={<LoadingSpinner />}>
              <AllProducts />
            </Suspense>
          </div>
        </div>
        <SanPhamLienQuan />
      </div>
    </div>
  )
}

export default Page
