import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { Prisma } from '@prisma/client'

import { KurashiDiv, KurashiLeftBorder } from '@/components/kurashi-div'
import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/product-info-trans-key'
import { Breadcrumb } from '@/components/breadcrumb'
import ProductSizeTable from '@/components/product/product-size-table'
import { columnsKey } from '@/utils/cell-renderer-helper'
import { tableHeaderRow } from '@/utils'
import prisma from '@/lib/prisma'

interface ProductInfoProps {
  lng: string
  id: string
}

interface VariantsTableProps {
  variant: Prisma.ProductVariantsGetPayload<{
    select: {
      product: {
        select: {
          id: true
          name: true
          size: {
            include: {
              dimension: {
                select: {
                  name: true
                  id: true
                  value: true
                }
              }
            }
          }
        }
      }
      id: true
      thumbnail: true
      variantName: true
      unit: true
    }
  }>
  lng: string
}

interface VariantTablesProps {
  variants: Array<VariantsTableProps['variant']>
  lng: string
}

const VariantTable: React.FC<VariantsTableProps> = async ({ variant, lng }) => {
  const { t } = await useTranslation(lng, transKey.namespace)

  const columns = variant.product.reduce((result, x) => {
    x.size?.dimension.forEach(y => {
      if (!result.has(y.name)) {
        result.add(y.name)
        return result
      } else return result.add(y.name)
    })
    return result
  }, columnsKey)

  const toRender = variant.product
    .map(x => {
      if (x.size !== null) {
        const dimensions = x.size.dimension.reduce((result, y) => {
          result.set(y.name, y.value.toString())
          return result
        }, new Map<string, string>())

        if (dimensions !== undefined) {
          dimensions.set(tableHeaderRow.manualLink, x.size?.productManual ?? '#')
          dimensions.set(tableHeaderRow.productId, x.size?.productId ?? '#')
          dimensions.set(tableHeaderRow.xdfLink, x.size?.twoDimCad ?? '#')
          dimensions.set(t(tableHeaderRow.productQuantity), x.size?.quantity.toString() ?? '#')
        }

        return dimensions
      }

      return new Map<string, string>()
    })
    .filter(x => x.size > 0)
    .map(x => Object.fromEntries(x))

  return (
    <div className='my-10'>
      <div className='flex flex-row justify-between w-full'>
        <div className='flex flex-row gap-1 items-center my-2'>
          <div className='flex flex-row gap-5 items-center'>
            <i className='fa-solid fa-up-right-and-down-left-from-center' />
            {variant.variantName}
          </div>
          <div className='w-1/3'><img src={variant.thumbnail} alt='' /></div>
        </div>
        <div className='flex flex-row gap-1 items-center'>
          <div>
            {t(transKey.unit)}
          </div>
          <div>
            {variant.unit}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center flex-1 max-lg:my-5 my-5 w-full mx-auto'>
        <div className='w-full mx-auto flex flex-col gap-10'>
          {variant.product.map(x =>
            <div key={x.id}>
              <ProductSizeTable lng={lng} columns={columns} toRender={toRender} />
            </div>)}
        </div>
      </div>
    </div>
  )
}

const VariantTables: React.FC<VariantTablesProps> = ({ variants, lng }) => {
  return <div> {variants.map(variant => <VariantTable lng={lng} variant={variant} key={uuidv4()} />)} </div>
}

const ProductInfo: React.FC<ProductInfoProps> = async ({ id, lng }) => {
  const { t } = await useTranslation(lng, transKey.namespace)
  const productInfo = await prisma.product.findUnique({
    where: { id },
    include: {
      origin: true,
      component: {
        include: {
          material: {
            select: { name: true }
          }
        }
      },
      size: {
        include: {
          dimension: {
            select: {
              name: true,
              value: true,
              id: true
            }
          },
          productSizeImage: true
        }
      },
      category: true,
      productIntro: true,
      ProductVariants: {
        select: {
          product: {
            select: {
              id: true,
              name: true,
              size: {
                include: {
                  dimension: {
                    select: {
                      name: true,
                      id: true,
                      value: true
                    }
                  }
                }
              }
            }
          },
          id: true,
          thumbnail: true,
          variantName: true,
          unit: true
        }
      }
    }
  })

  const breadcrumb = [
    <Link href='/' key={uuidv4()}>{t(transKey.home)}</Link>,
    <Link href='/products' key={uuidv4()}>{t(transKey.allProducts)}</Link>,
    <Link href={`/products/category/${productInfo?.category?.id ?? '#'}`} key={uuidv4()}>{productInfo?.category?.name ?? 'null'}</Link>,
    <Link href={`/products/product-detail/${productInfo?.id ?? '#'}`} key={uuidv4()}>{productInfo?.name ?? 'null'}</Link>
  ]

  if (productInfo !== null) {
    const columns = new Set<string>([tableHeaderRow.manualLink, tableHeaderRow.productId, tableHeaderRow.productQuantity, tableHeaderRow.xdfLink])
    const toRender: Array<{ [key in tableHeaderRow]: any }> = [{
      manualLink: productInfo.size?.productManual ?? '#',
      productId: productInfo.id,
      productQuantity: productInfo.size?.quantity ?? 0,
      xdfLink: productInfo.size?.twoDimCad ?? '#'
    }]

    return (
      <div>
        <div className='w-4/5 my-10 mx-auto flex flex-row'>
          <div>
            <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto'>
              <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex flex-col w-4/5 mx-auto my-10 max-lg:w-full max-lg:p-1'>
            <div className='w-fit mb-10'>
              <KurashiLeftBorder>
                <h1 className='text-xl'>{t(transKey.productInformation)}</h1>
              </KurashiLeftBorder>
            </div>
            <div className='flex flex-row items-center justify-center max-lg:flex-col'>
              <div className='flex-1 max-lg:w-full w-full'>
                <img className='h-3/4' src={productInfo.thumbnail} alt={productInfo.name} />
              </div>
              <div className='flex flex-col justify-center gap-1 h-full w-1/3'>
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
                <div className='bg-secondary p-2 flex flex-row gap-5'>
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
            <div className='w-fit mb-10'>
              <KurashiLeftBorder>
                <h1 className='text-xl'>{t(transKey.productIntro)}</h1>
              </KurashiLeftBorder>
            </div>
            <div className='flex flex-row bg-secondary max-lg:flex-col max-lg:w-full max-lg:mx-0'>
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
            <div className='w-fit mb-10'>
              <KurashiLeftBorder>
                <h1 className='text-xl'>{t(transKey.productSize)}</h1>
              </KurashiLeftBorder>
            </div>
            <div className='flex flex-row max-lg:flex-col bg-secondary justify-center items-center max-lg:w-full max-lg:mx-0'>
              <div className='flex flex-row-reverse w-1/2 justify-center items-center max-lg:w-full my-5'>
                {productInfo.size?.productSizeImage.map(imgSrc => <img src={imgSrc.imageUrl} key={imgSrc.id} alt='product size image' />)}
              </div>
            </div>
            <div className='w-full my-5'>
              <ProductSizeTable lng={lng} columns={columns} toRender={toRender} />
            </div>
            <div>
              {productInfo.ProductVariants.length > 0 && (
                <div className='my-10'>
                  <div className='text-xl'>
                    <KurashiLeftBorder>
                      Các sản phẩm khác
                    </KurashiLeftBorder>
                  </div>
                  <VariantTables lng={lng} variants={productInfo.ProductVariants} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    )
  }

  return notFound()
}

export default ProductInfo
