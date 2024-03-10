import React from 'react'
import Link from 'next/link'

import { KurashiProduct } from '@/types/product-info'
import { KurashiDiv, KurashiLeftBorder } from '@/components/kurashi-div'
import { useTranslation } from '@/i18n'
import { productName, productMaterial, productOrigin, contactUsingZalo, productInformation } from '@/i18n/translation-key'

interface ProductInfoProps {
  kurashiProductInformation: KurashiProduct
  lng: string
}

const ProductInfo: React.FC<ProductInfoProps> = async ({ kurashiProductInformation, lng }: ProductInfoProps) => {
  const { t } = await useTranslation(lng)
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col w-4/5 mx-auto'>
        <div className='w-fit pl-10 mb-10'>
          <KurashiLeftBorder>
            <h1 className='text-xl'>{t(productInformation)}</h1>
          </KurashiLeftBorder>
        </div>
        <div className='flex flex-row mx-auto items-center gap-20 max-lg:flex-col'>
          <div className='w-1/2 max-w-md'>
            <img className='max-w-full' src={kurashiProductInformation.productInformation.productImageUrl} alt={kurashiProductInformation.productInformation.productName} />
          </div>
          <div className='flex flex-col justify-center gap-1 flex-grow h-full'>
            <div className='bg-secondary p-5'>
              <KurashiLeftBorder>
                {`${t(productName)}`}: <span>{kurashiProductInformation.productInformation.productName}</span>
              </KurashiLeftBorder>
            </div>
            <div className='bg-secondary p-5'>
              <div>
                <KurashiLeftBorder>
                  {`${t(productMaterial)}`}:
                </KurashiLeftBorder>
              </div>
              <div className='pl-10'>
                {kurashiProductInformation.productInformation.productMaterial.map(material => <div key={material}><span className='text-main text-xl font-semibold'> - </span>{material}</div>)}
              </div>
            </div>
            <div className='bg-secondary p-5'>
              <div>
                <KurashiLeftBorder>
                  {`${t(productOrigin)}`}: {'\t'}
                  <span>
                    {kurashiProductInformation.productInformation.productOrigin.join(',')}
                  </span>
                </KurashiLeftBorder>
              </div>
            </div>
            <div className='bg-secondary p-2'>
              <div className='w-fit mx-auto'>
                <KurashiDiv>
                  <Link href='#zalolink'>{t(contactUsingZalo)}</Link>
                  <div className='ml-3 inline-block'>
                    <i className='fa-solid fa-chevron-right' />
                  </div>
                </KurashiDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
