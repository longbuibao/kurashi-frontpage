import React from 'react'

import { Nav } from '@/components/nav'
import { useTranslation } from '@/i18n'
import { navItems } from '@/constants'

interface PageParam {
  params: { lng: string }
}

const Page = async ({ params: { lng } }: PageParam): Promise<React.ReactElement> => {
  const { t } = await useTranslation(lng)
  return (
    <Nav t={t} links={navItems.map(item => { return { label: t(item.label), url: item.url } })} />
  )
}

export default Page
