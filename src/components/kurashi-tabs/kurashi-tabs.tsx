'use client'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '@/components/kurashi-tabs/react-tabs.css'

import { KurashiCategory } from '@/types/kurashi-category'
import { useTranslationClient } from '@/i18n/client-side'
import { defaultClientNS } from '@/i18n/settings'

interface KurashiTabsProps {
  kurashiCategories: KurashiCategory[]
  lng: string
}

const KurashiTabs: React.FC<KurashiTabsProps> = ({ lng, kurashiCategories }) => {
  const { t } = useTranslationClient(lng, defaultClientNS, {})
  const categories = kurashiCategories.map(category => category.categoryName).map(categoryName => t(categoryName))
  return (
    <Tabs className='w-2/3 mx-auto my-11'>
      <TabList className='w-full flex flex-row justify-around'>
        {categories.map(categoryName => <Tab className='pb-2 text-2xl font-semibold hover:cursor-default' key={categoryName}>{categoryName}</Tab>)}
      </TabList>
      {kurashiCategories.map(kurashiCategory => (
        <TabPanel key={kurashiCategory.categoryName}>{kurashiCategory.subCategories.map(subCategory => (
          <div key={subCategory.name}>
            <div>{subCategory.name}</div><div>{subCategory.thumbnail}</div>
          </div>
        ))}
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default KurashiTabs
