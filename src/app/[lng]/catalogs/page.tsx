import React, { Suspense } from 'react'
import Link from 'next/link'

import { CatalogCard } from '@/components/catalog-card'
import { KurashiLeftBorder } from '@/components/kurashi-div'
import { Breadcrumb } from '@/components/breadcrumb'
import prisma from '@/lib/prisma'
import { home, catalogs, namespace } from '@/i18n/catalog-trans-key'
import { useTranslation } from '@/i18n'
import CatalogsSkeleton from './skeleton'
import { getMetadata } from '@/utils'
import { Metadata } from 'next'

interface PageParam {
  params: { lng: string }
}

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Catalogs'
  const pageName = 'catalogs-page'
  return await getMetadata(pageName, defaultTitle)
}

const GetCatalogs: React.FC = async () => {
  const catalogs = await prisma.catalog.findMany({
    where: { isAvailable: true },
    take: 3
  })
  return (
    <div className='flex flex-row gap-10 justify-center max-sm:flex-col'>
      {catalogs.map(x => (
        <div key={x.id} className='w-1/2'>
          <CatalogCard catalogName={x.name} fileSize={x.size} thumbnail={x.thumbnail} pdfLink={x.pdfLink} />
        </div>
      ))}
    </div>
  )
}

const Catalog: React.FC<PageParam> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng, namespace)
  const breadcrumb = [
    <Link href='/' key='a'>{t(home)}</Link>,
    <Link href='/catalogs' key='b'>{t(catalogs)}</Link>
  ]

  return (
    <div className='w-4/5 mx-auto my-10'>
      <div className='flex flex-row-reverse'>
        <div className='flex flex-row gap-5 items-center justify-center self-start mr-auto'>
          <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
        </div>
      </div>
      <div className='my-10'>
        <KurashiLeftBorder>
          {t(catalogs)}
        </KurashiLeftBorder>
      </div>
      <div className='flex flex-row gap-10 justify-center'>
        <Suspense fallback={<CatalogsSkeleton />}>
          <GetCatalogs />
        </Suspense>
      </div>
    </div>
  )
}

export default Catalog
