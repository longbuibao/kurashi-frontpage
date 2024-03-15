import React from 'react'
import Link from 'next/link'

import { useTranslation } from '@/i18n'
import { KurashiTab } from '@/components/kurashi-tabs'

import prisma from '@/lib/prisma'
import { Product } from '@prisma/client'

interface KurashiCategoriesProps {
  lng: string
}

// @ts-expect-error
const KurashiCategories: Promise<React.JSX.Element> = async ({ lng }: KurashiCategoriesProps) => {
  const { t } = await useTranslation(lng)
  const productsRaw = await prisma.product.findMany({
    take: 20,
    where: { isAvailable: true },
    include: { category: { select: { name: true, id: true } } }
  })

  const products = Array.from(productsRaw.reduce((acc, product): Map<string, Product[]> => {
    if (product.category !== null) {
      const key = product.category.name
      if (key !== undefined && key !== '' && key !== null && acc.has(key)) {
        const value = acc.get(key)
        if (value !== undefined) {
          const a = [...value, product]
          console.log(a)
          acc.set(key, [...value, product])
          return acc
        }
      } else {
        acc.set(key, [product])
        return acc
      }
    }
    return acc
  }, new Map<string, Product[]>()))

  const categoriesName = products.map(category => category[0]).map(categoryName => t(categoryName))
  const productsToShow = products.map((product) => {
    return {
      key: product[0],
      content: product[1].map((prod) => (
        <Link key={prod.name} href={prod.url}>
          <div className='flex flex-col items-center'>
            <img className='w-64' src={prod.thumbnail} alt='product thumbnail' />
            <div className='mt-3 hover:cursor-pointer font-semibold hover:text-main'>{t(prod.name)}</div>
          </div>
        </Link>))
    }
  })

  return <KurashiTab body={productsToShow} tabList={categoriesName} />
}

export default KurashiCategories
