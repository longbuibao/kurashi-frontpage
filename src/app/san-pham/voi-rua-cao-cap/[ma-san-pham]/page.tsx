import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

import prisma from '@/lib/prisma'
import { EmblaCarouselWithThumbnail } from '@/components/embla-carousel'
import { formatCurrency } from '@/utils'
import { UrlObject } from 'url'
import { KurashiSlider } from '@/components/kurashi-slider'
import { SanPhamLienQuan } from '@/components/san-pham-lien-quan'
import { createTitleVoiRuaDetailPage, createTitleVoiRuaDetailPageNormalized } from '../utils'

interface PageProps {
  params: Promise<{ 'ma-san-pham': string }>
}

const DownloadLink: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  return (
    <Link href={url as any as UrlObject}>
      <div className="border border-kurashi-border max-md:gap-3 flex flex-row gap-10 items-center p-3 max-md:w-fit">
        <div>{title}</div>
        <i className="fa-solid fa-chevron-right" />
      </div>
    </Link>
  )
}

const createImageSlider = (
  images: Array<{ imageUrl: string; key: string; index: number }>,
  productName: string
): Array<{
  key: string
  index: number
  content: any
}> =>
  images.map((x, idx) => {
    return {
      key: x.key,
      index: x.index,
      content: (
        <Image
          src={x.imageUrl}
          width={696}
          height={696}
          alt={`${productName} - Hình ảnh ${idx + 1} - Vòi rửa cao cấp Kurashi`}
        />
      )
    }
  })

export async function generateStaticParams(): Promise<any> {
  const products = await prisma.product.findMany({
    where: {
      category: {
        categoryUniqueName: 'voi-rua-chen'
      }
    },
    include: {
      secondaryCategory: true,
      finish: true,
      category: true
    }
  })

  return products.map((x) => {
    return { 'ma-san-pham': createTitleVoiRuaDetailPageNormalized(x) }
  })
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const param = params['ma-san-pham']
  const sku = param.split('-').slice(-1)[0]

  const product = await prisma.product.findFirst({
    where: { sku, isAvailable: true },
    include: {
      category: true,
      secondaryCategory: true,
      finish: true,
      material: true,
      productInterface: true,
      productImages: true,
      productIntro: true
    }
  })

  if (product === null) {
    return {
      title: 'Sản phẩm không tìm thấy | Kurashi'
    }
  }

  const productName = createTitleVoiRuaDetailPage(product)
  const description =
    product.shortIntro ??
    `Vòi rửa cao cấp ${productName} của Kurashi - ${product.secondaryCategory?.name ?? ''} ${
      product.material?.name ?? ''
    } ${product.finish?.name ?? ''}. Chất lượng cao, thiết kế hiện đại.`

  const keywords = [
    productName,
    'vòi rửa',
    'vòi rửa cao cấp',
    product.secondaryCategory?.name ?? '',
    product.material?.name ?? '',
    product.finish?.name ?? '',
    'Kurashi',
    'phụ kiện bếp'
  ].filter((keyword) => keyword !== '')

  const ogImages = product.thumbnail !== null && product.thumbnail !== '' ? [product.thumbnail] : []
  const twitterImages =
    product.thumbnail !== null && product.thumbnail !== '' ? [product.thumbnail] : []

  return {
    title: `${productName} | Kurashi`,
    description,
    keywords,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: `/san-pham/voi-rua-cao-cap/${param}`
    },
    openGraph: {
      title: `${productName} | Kurashi`,
      description,
      type: 'website',
      url: `/san-pham/voi-rua-cao-cap/${param}`,
      images: ogImages
    },
    twitter: {
      card: 'summary_large_image',
      title: `${productName} | Kurashi`,
      description,
      images: twitterImages
    }
  }
}

const Page: React.FC<PageProps> = async (props) => {
  const params = await props.params
  const param = params['ma-san-pham']

  const sku = param.split('-').slice(-1)[0]

  const product = await prisma.product.findFirst({
    where: { sku, isAvailable: true },
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

  if (product === null) return <div>not found product {param}</div>

  const productName = createTitleVoiRuaDetailPage(product)

  const steps = [
    {
      summary: 'E-LEVER',
      thumbnail:
        'https://storage.googleapis.com/kurashi_frontpage_files/images/products/voi-rua/e-lever.webp',
      label: 'E-LEVER',
      title: 'E-LEVER',
      content:
        'Cần gạt tạo điểm "tick" ở vị trí nước lạnh, giúp nhận biết ranh giới nước lạnh - nước nóng và tránh kích hoạt máy nước nóng không cần thiết.'
    },
    {
      summary: 'DUAL FLOW',
      thumbnail:
        'https://storage.googleapis.com/kurashi_frontpage_files/images/products/voi-rua/dual-flow.webp',
      label: 'DUAL FLOW',
      title: 'DUAL FLOW',
      content:
        'Hai chế độ nước - tia sen và bọt khí - chuyển đổi tinh tế, mang đến trải nghiệm vừa mạnh mẽ vừa mềm mại, phù hợp hoàn hảo cho mọi thao tác rửa.'
    },
    {
      summary: 'SMOOTH-PULL',
      thumbnail:
        'https://storage.googleapis.com/kurashi_frontpage_files/images/products/voi-rua/smooth-pull.webp',
      label: 'SMOOTH-PULL',
      title: 'SMOOTH-PULL',
      content:
        'Chuyển động dây rút nhẹ, mượt và êm ái, mang lại trải nghiệm linh hoạt mà không cần dùng lực.'
    }
  ]

  const thumbnailImages = product.productImages
    .filter((x) => !x.isCadImage)
    .map((x, i) => {
      return {
        key: x.id,
        index: i,
        imageUrl: x.imageUrl
      }
    })
  const cadImages = product.productImages.filter((x) => x.isCadImage)
  const productIntro = product.productIntro.filter((x) => x.isMainIntro)[0]
  const cadImage = cadImages[0]

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'Kurashi'
    },
    description: product.shortIntro ?? `Vòi rửa cao cấp ${productName} của Kurashi`,
    image: product.thumbnail !== null && product.thumbnail !== '' ? [product.thumbnail] : [],
    category: product.category?.name ?? 'Vòi rửa',
    offers: {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'VND',
      availability: product.isAvailable
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Mã sản phẩm', value: product.sku },
      { '@type': 'PropertyValue', name: 'Loại', value: product.secondaryCategory?.name ?? '' },
      { '@type': 'PropertyValue', name: 'Chất liệu', value: product.material?.name ?? '' },
      { '@type': 'PropertyValue', name: 'Bề mặt', value: product.productInterface?.name ?? '' },
      { '@type': 'PropertyValue', name: 'Xuất xứ', value: product.xuatXu ?? '' },
      { '@type': 'PropertyValue', name: 'Bảo hành', value: product.baoHanh ?? '' }
    ].filter((prop) => prop.value !== null && prop.value !== '')
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: '/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sản phẩm',
        item: '/san-pham'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Vòi rửa cao cấp',
        item: '/san-pham/voi-rua-cao-cap'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: productName,
        item: `/san-pham/voi-rua-cao-cap/${param}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="w-full">
        <div
          className="bg-cover bg-no-repeat bg-center w-full h-[60vh] relative max-md:hidden"
          role="img"
          aria-label={`Hình ảnh sản phẩm ${productName}`}>
          <Image
            className="object-cover"
            src="https://storage.googleapis.com/kurashi_frontpage_files/images/products/voi-rua/cover-page-voi-rua.svg"
            fill
            alt={`${productName} - Vòi rửa cao cấp Kurashi`}
            priority
          />
        </div>
        <div className="relative h-[60vh] hidden max-md:block">
          <Image
            src="https://storage.googleapis.com/kurashi_frontpage_files/images/products/voi-rua/voi-rua-cao-cap-mobile-1.webp"
            alt={`${productName} - Vòi rửa cao cấp Kurashi`}
            fill
            priority
          />
        </div>
        <article className="my-20">
          <header className="text-[#6D6E71] flex flex-col gap-10 w-[60%] max-md:w-4/5 mx-auto">
            <h1 className="text-3xl font-bold w-full max-md:mx-auto max-md:text-2xl max-md:text-center">
              {productName.toUpperCase()}
            </h1>
            <p className="max-md:text-center">{product.shortIntro}</p>
          </header>
          <section className="flex flex-row justify-center mt-16 gap-20 max-md:gap-10 w-4/5 mx-auto items-stretch max-md:flex-col">
            <div className="w-[30%] max-md:w-full">
              {thumbnailImages.length > 0 ? (
                <EmblaCarouselWithThumbnail
                  slides={createImageSlider(thumbnailImages, productName)}
                  options={{}}
                />
              ) : (
                'miss sliders, add image in ProductImages'
              )}
            </div>
            <div className="w-1/3 flex flex-col max-md:w-full">
              <div className="text-[#6D6E71] pb-10 border-b-[0.5px] border-secondary-opacity max-md:text-center">
                {productIntro !== undefined ? (
                  productIntro.content
                ) : (
                  <>miss content product intro</>
                )}
              </div>
              <div className="grid grid-cols-2 grid-rows-7 gap-5 mt-5 max-md:gap-[.3rem]">
                <div className="flex items-center justify-start font-bold">Thông tin</div>
                <div className="flex items-center justify-start font-bold">Chi tiết</div>
                <div className="flex items-center justify-start">Mã sản phẩm</div>
                <div className="flex items-center justify-start">{product.sku}</div>
                <div className="flex items-center justify-start">Loại</div>
                <div className="flex items-center justify-start">
                  {product.secondaryCategory?.name}
                </div>
                <div className="flex items-center justify-start">Chất liệu</div>
                <div className="flex items-center justify-start">{product.material?.name}</div>
                <div className="flex items-center justify-start">Bề mặt</div>
                <div className="flex items-center justify-start">
                  {product.productInterface?.name}
                </div>
                <div className="flex items-center justify-start">Xuất xứ</div>
                <div className="flex items-center justify-start">{product.xuatXu}</div>
                <div className="flex items-center justify-start">Bảo hành</div>
                <div className="flex items-center justify-start">{product.baoHanh}</div>
              </div>
              <div className="justify-self-end mt-auto max-md:mt-10">
                <div className="grid grid-cols-2">
                  <div>Giá niêm yết</div>
                  <div className="flex flex-row gap-5 max-md:flex-col max-md:gap-0">
                    <div className="text-main font-bold">{formatCurrency(product.price)}</div>
                    <div>(chưa VAT)</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
        <section className="w-[60%] max-md:w-4/5 mx-auto mt-28 mb-20">
          <h2 className="pl-3 border-l-2 border-black text-black text-xl">
            {'Công nghệ nổi bật'.toUpperCase()}
          </h2>
          <div className="w-4/5 mx-auto max-md:w-full py-20 max-md:py-0">
            <KurashiSlider steps={steps} />
          </div>
        </section>
        <section className="w-[60%] max-md:w-4/5 mx-auto my-10">
          <h2 className="pl-3 border-l-2 border-black text-black text-xl">
            {'Cấu tạo'.toUpperCase()}
          </h2>
          <div className="relative w-[65%] my-20 mx-auto max-md:w-full">
            {cadImage !== undefined ? (
              <Image
                className="object-fill aspect-[1.31166518255]"
                src={cadImage.imageUrl}
                width={1473}
                height={1123}
                alt={
                  cadImage.content !== null && cadImage.content !== ''
                    ? cadImage.content
                    : `${productName} - Bản vẽ cấu tạo sản phẩm`
                }
              />
            ) : (
              'miss cad image'
            )}
          </div>
        </section>
        <section className="w-[60%] max-md:w-4/5 mx-auto mt-10 mb-1">
          <h2 className="pl-3 border-l-2 border-black text-black text-xl">
            {'Tải dữ liệu'.toUpperCase()}
          </h2>
          <nav
            className="flex flex-row gap-10 my-10 max-md:flex-col"
            aria-label="Tải tài liệu sản phẩm">
            <DownloadLink title="Bản vẽ sản phẩm (PDF)" url="#" />
            <DownloadLink title="Bản vẽ sản phẩm (DXF)" url="#" />
          </nav>
        </section>
        <section className="w-[60%] mx-auto max-md:w-full">
          <SanPhamLienQuan className="my-24 max-md:mt-20 max-md:mb-16 max-md:text-center" />
        </section>
      </main>
    </>
  )
}

export default Page
