'use client'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '@/components/kurashi-tabs/react-tabs.css'

interface KurashiTabsProps {
  body: Array<{ key: string, content: any }>
  tabList: any[]
}

const KurashiTabs: React.FC<KurashiTabsProps> = ({ body, tabList }) => {
  return (
    <Tabs defaultIndex={0} className='w-2/3 mx-auto my-11 max-lg:mx-1 max-lg:w-full'>
      <TabList className='w-full flex flex-row justify-around mb-10 max-lg:flex-col max-lg:w-fit max-lg:mx-auto'>
        {tabList?.map(tab => <Tab className='pb-2 text-3xl font-semibold hover:cursor-pointer max-lg:text-center max-lg:my-1 ' key={tab}>{tab}</Tab>)}
      </TabList>
      {body?.map(item => (
        <TabPanel key={item.key}>
          {item.content}
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default KurashiTabs
