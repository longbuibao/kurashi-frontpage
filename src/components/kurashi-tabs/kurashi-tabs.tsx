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
    <Tabs defaultIndex={0} className='mx-auto max-lg:w-full'>
      <TabList className='w-4/5 mx-auto flex flex-row justify-around mb-10 max-lg:flex-col max-lg:w-full max-lg:mx-auto'>
        {tabList?.map(tab => <Tab className='pb-2 text-2xl hover:cursor-pointer max-lg:text-center max-lg:my-1 hover:bg-secondary p-3 hover:rounded-2xl' key={tab}>{tab}</Tab>)}
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
