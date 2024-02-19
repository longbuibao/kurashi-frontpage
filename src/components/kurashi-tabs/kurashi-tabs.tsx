'use client'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import { KurashiCategory } from '@/types/kurashi-category'
import { KurashiLink } from '@/components/kurashi-link'

interface KurashiTabsProps {
  kurashiCategoriesName: string[]
}

const KurashiTabs: React.FC<KurashiTabsProps> = ({ kurashiCategoriesName }) => {
  return (
    <div>
      <Tabs className='w-2/3 mx-auto' selectedTabClassName='none'>
        <TabList className='w-full flex flex-row justify-center'>
          {kurashiCategoriesName.map(categoryName => <Tab key={categoryName}><KurashiLink>{categoryName}</KurashiLink></Tab>)}
        </TabList>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </Tabs>
    </div>
  )
}

export default KurashiTabs
