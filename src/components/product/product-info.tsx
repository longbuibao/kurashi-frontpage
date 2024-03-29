import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { KurashiDiv, KurashiLeftBorder } from '@/components/kurashi-div'
import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/product-info-trans-key'
import { productNs } from '@/i18n/settings'
import { Breadcrumb } from '@/components/breadcrumb'

import prisma from '@/lib/prisma'

interface ProductInfoProps {
  lng: string
  id: string
}

const ProductInfo: React.FC<ProductInfoProps> = async ({ id, lng }) => {
  const { t } = await useTranslation(lng, productNs)
  const productInfo = await prisma.product.findUnique({
    where: { id },
    include: {
      origin: true,
      component: { include: { material: { select: { name: true } } } },
      size: { include: { dimension: { select: { name: true, value: true } } } },
      category: true,
      productIntro: true
    }
  })

  const breadcrumb = [
    <Link href='/' key='a'>{t(transKey.home)}</Link>,
    <Link href='/products' key='b'>{t(transKey.allProducts)}</Link>,
    <Link href={`/products/product-detail/${productInfo?.id ?? '#'}`} key='c'>{productInfo?.category?.name ?? 'null'}</Link>,
    <Link href={`/products/category/${productInfo?.category?.id ?? '#'}`} key='c'>{productInfo?.name ?? 'null'}</Link>
  ]

  if (productInfo !== null) {
    return (
      <div className='flex flex-col w-full'>
        <div className='w-4/5 pl-10 mx-auto flex flex-row'>
          <div>
            <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto'>
              <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
            </div>
          </div>
        </div>
        <div className='flex flex-col w-4/5 mx-auto my-10 max-lg:w-full max-lg:p-1'>
          <div className='w-fit pl-10 mb-10'>
            <KurashiLeftBorder>
              <h1 className='text-xl'>{t(transKey.productInformation)}</h1>
            </KurashiLeftBorder>
          </div>
          <div className='flex flex-row mx-auto items-center gap-20 max-lg:flex-col'>
            <div className='w-3/5 max-w-md max-lg:w-full'>
              <img className='max-w-full' src={productInfo.thumbnail} alt={productInfo.name} />
            </div>
            <div className='flex flex-col justify-center gap-1 flex-grow h-full'>
              <div className='bg-secondary p-5'>
                <KurashiLeftBorder>
                  {`${t(transKey.productName)}`}: <span>{t(productInfo.name)}</span>
                </KurashiLeftBorder>
              </div>
              <div className='bg-secondary p-5'>
                <div>
                  <KurashiLeftBorder>
                    {`${t(transKey.productMaterial)}`}:
                  </KurashiLeftBorder>
                </div>
                <div className='pl-10'>
                  {productInfo.component.map(component => (
                    <div key={component.id}>
                      <span className='text-main text-xl font-semibold'> - </span>{t(component.name)}: <span>{component.material.map(material => t(material.name)).join(', ')}</span>
                    </div>
                  )
                  )}
                </div>
              </div>
              <div className='bg-secondary p-5'>
                <div>
                  <KurashiLeftBorder>
                    {`${t(transKey.productOrigin)}`}: {'\t'}
                    <span>
                      {productInfo.origin.map(fromOrigin => t(fromOrigin.name)).join(', ')}
                    </span>
                  </KurashiLeftBorder>
                </div>
              </div>
              <div className='bg-secondary p-2'>
                <div className='w-fit mx-auto'>
                  <KurashiDiv>
                    <Link href='#zalolink'>{t(transKey.contactUsingZalo)}</Link>
                    <div className='ml-3 inline-block'>
                      <i className='fa-solid fa-chevron-right' />
                    </div>
                  </KurashiDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-4/5 mx-auto max-lg:w-full max-lg:p-1'>
          <div className='w-fit pl-10 mb-10'>
            <KurashiLeftBorder>
              <h1 className='text-xl'>{t(transKey.productIntro)}</h1>
            </KurashiLeftBorder>
          </div>
          <div className='flex flex-row bg-secondary max-lg:flex-col mx-10 max-lg:w-full max-lg:mx-0'>
            <div className='flex flex-col w-1/2 p-10 items-center justify-center max-lg:w-full'>
              {productInfo.productIntro.map(intro => (
                <div className='flex flex-col gap-5 my-5' key={intro.id}>
                  <KurashiLeftBorder>
                    <div>{intro.title}</div>
                  </KurashiLeftBorder>
                  <div className='pl-4'>
                    {intro.content}
                  </div>
                </div>
              ))}
            </div>
            <div className='flex flex-row-reverse w-1/2 justify-center items-center max-lg:w-full max-lg:p-10'>
              {productInfo.productIntro.map(intro => (
                <div className='flex flex-col w-1/2 gap-5 my-5' key={intro.id}>
                  <img src={intro.introImg} alt='product intro image' className='w-5/6' />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col w-4/5 mx-auto my-10 max-lg:w-full max-lg:p-1'>
          <div className='w-fit pl-10 mb-10'>
            <KurashiLeftBorder>
              <h1 className='text-xl'>{t(transKey.productSize)}</h1>
            </KurashiLeftBorder>
          </div>
          <div className='flex flex-row max-lg:flex-col bg-secondary justify-center items-center mx-10 max-lg:w-full max-lg:mx-0'>
            <div className='flex flex-row-reverse w-1/2 justify-center items-center max-lg:w-full my-5'>
              <img src={productInfo.size?.productSizeImage} alt='product size image' className='w-5/6' />
            </div>
            <div className='flex flex-col items-center justify-center w-full flex-1 max-lg:my-5 mx-5'>
              <div className='w-full'>
                <table className='table-auto w-full'>
                  <thead className='bg-main text-secondary'>
                    <tr>
                      <th>{t(transKey.productSizeKey)}</th>
                      <th>{t(transKey.productSizeValue)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productInfo.size?.dimension.map(di => (
                      <tr key={di.name} className='bg-opacity-[0.3] bg-main hover:bg-opacity-[0.7]'>
                        <td className='text-center'>{di.name}</td>
                        <td className='text-center'>
                          <div className='flex flex-row w-1/2 mx-auto'>
                            <div>{di.value}</div>
                            <div className='ml-auto'>{productInfo.size?.unit}</div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='flex flex-col gap-5 my-5 w-full'>
                <KurashiDiv>
                  <Link href='#zalolink'>
                    <div className='flex flex-row justify-between gap-3'>
                      <div>{t(transKey.productDownloadDxf)}</div>
                      <i className='fa-solid fa-arrow-up-right-from-square' />
                    </div>
                  </Link>
                </KurashiDiv>
                <KurashiDiv>
                  <Link href={productInfo.size?.twoDimCad ?? '#'}>
                    <div className='flex flex-row justify-between gap-3'>
                      <div>{t(transKey.productDownloadPdf)}</div>
                      <i className='fa-solid fa-file-arrow-down' />
                    </div>
                  </Link>
                </KurashiDiv>
                <KurashiDiv>
                  <Link href={productInfo.size?.twoDimCad ?? '#'}>
                    <div className='flex flex-row justify-between gap-3'>
                      <div>{t(transKey.productManualLink)}</div>
                      <i className='fa-solid fa-file-arrow-down' />
                    </div>
                  </Link>
                </KurashiDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return notFound()
}

export default ProductInfo
