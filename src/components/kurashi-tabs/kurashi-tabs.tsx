'use client'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '@/components/kurashi-tabs/react-tabs.css'

import { KurashiCategory } from '@/types/kurashi-category'
import { useTranslationClient } from '@/i18n/client-side'
import { defaultNS } from '@/i18n/settings'
import Link from 'next/link'

interface KurashiTabsProps {
  kurashiCategories: KurashiCategory[]
  lng: string
}

const KurashiTabs: React.FC<KurashiTabsProps> = ({ lng, kurashiCategories }) => {
  const { t } = useTranslationClient(lng, defaultNS, {})
  const categories = kurashiCategories.map(category => category.categoryName).map(categoryName => t(categoryName))
  return (
    <Tabs defaultIndex={0} className='w-2/3 mx-auto my-11'>
      <TabList className='w-full flex flex-row justify-around mb-10'>
        {categories.map(categoryName => <Tab className='pb-2 text-2xl font-semibold hover:cursor-pointer' key={categoryName}>{categoryName}</Tab>)}
      </TabList>
      {kurashiCategories.map(kurashiCategory => (
        <TabPanel key={kurashiCategory.categoryName}>{kurashiCategory.subCategories.map(subCategory => (
          <Link key={subCategory.name} href={subCategory.url}>
            <div className='flex flex-col items-center'>
              <img className='w-64' src={subCategory.thumbnail} alt='product thumbnail' />
              <div className='mt-3 hover:cursor-pointer font-semibold hover:text-main'>{t(subCategory.name)}</div>
            </div>
          </Link>
        ))}
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default KurashiTabs
