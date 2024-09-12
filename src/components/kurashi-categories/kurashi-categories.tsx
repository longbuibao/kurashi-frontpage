import React from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import { useTranslation } from '@/i18n'
import { KurashiTab } from '@/components/kurashi-tabs'
import { ProductCard } from '@/components/product'
import { createCategoryMapToProducts } from '@/utils'

import prisma from '@/lib/prisma'

interface KurashiCategoriesProps {
  lng: string
}

// @ts-expect-error
const KurashiCategories: Promise<React.JSX.Element> = async ({ lng }: KurashiCategoriesProps) => {
  const { t } = await useTranslation(lng)
  const productsRaw = await prisma.product.findMany({
    take: 20,
    where: { isAvailable: true },
    include: {
      category: { select: { name: true, id: true } },
      ProductColor: true,
      ProductTag: true
    }
  })

  const products = Array.from(createCategoryMapToProducts(productsRaw))
  const categoriesName = products.map(category => category[0]).map(categoryName => t(categoryName))

  const productsToShow = products.map((product) => {
    return {
      key: product[0],
      content: product[1].map((x) => {
        const url = x.hasLandingPage ? x.landingPageUrl : `/products/product-detail/${x.id}`
        return (
          <Link key={uuidv4()} href={url ?? '#'}>
            <ProductCard lng={lng} product={x} />
          </Link>
        )
      })
    }
  })

  return <KurashiTab body={productsToShow} tabList={categoriesName} />
}

export default KurashiCategories
