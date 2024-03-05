import React from 'react'
import Link from 'next/link'

import { kurashiFetcher } from '@/utils/kurashi-fetcher'
import { KurashiCategory } from '@/types/kurashi-category'
import { useTranslation } from '@/i18n'
import { KurashiTab } from '@/components/kurashi-tabs'

interface KurashiCategoriesProps {
  lng: string
}

// @ts-expect-error
const KurashiCategories: Promise<React.JSX.Element> = async ({ lng }: KurashiCategoriesProps) => {
  const { t } = await useTranslation(lng)
  const categories = await kurashiFetcher('http://localhost:3001') as KurashiCategory[]
  const categoriesName = categories.map(category => category.categoryName).map(categoryName => t(categoryName))
  const kurashiSubCategories = categories.map((category) => {
    return {
      key: category.categoryName,
      content: category.subCategories.map(sub => (
        <Link key={sub.name} href={sub.url}>
          <div className='flex flex-col items-center'>
            <img className='w-64' src={sub.thumbnail} alt='product thumbnail' />
            <div className='mt-3 hover:cursor-pointer font-semibold hover:text-main'>{t(sub.name)}</div>
          </div>
        </Link>
      ))
    }
  })

  return <KurashiTab body={kurashiSubCategories} tabList={categoriesName} />
}

export default KurashiCategories
