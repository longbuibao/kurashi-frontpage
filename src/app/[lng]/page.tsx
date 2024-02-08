import React from 'react'

import { Nav } from '@/components/nav'
import { useTranslation } from '@/i18n'

interface PageParam {params: { lng: string }}

const Page = async ({ params: { lng } }: PageParam): Promise<React.ReactElement> => {
  const { t } = await useTranslation(lng)
  return (
    <Nav links={[{ label: t('home'), url: '#' }]} />
  )
}

export default Page
