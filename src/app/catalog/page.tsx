import React, { Suspense } from 'react'

import { CatalogCard } from '@/components/catalog-card'
import prisma from '@/lib/prisma'
import CatalogsSkeleton from './skeleton'
import { getMetadata } from '@/utils'
import { Metadata } from 'next'

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
    <div className='flex flex-row gap-20 justify-center max-md:flex-col max-md:w-full'>
      {catalogs.map(x => (
        <div key={x.id} className='w-96 max-md:w-[80%] max-md:mx-auto'>
          <CatalogCard catalogName={x.name} fileSize={x.size} thumbnail={x.thumbnail} pdfLink={x.pdfLink} />
        </div>
      ))}
    </div>
  )
}

const Catalog: React.FC = async () => {
  return (
    <div className='w-4/5 mx-auto my-10'>
      <div className='flex flex-row gap-10 justify-center my-10 max-md:my-0'>
        <Suspense fallback={<CatalogsSkeleton />}>
          <GetCatalogs />
        </Suspense>
      </div>
    </div>
  )
}

export default Catalog
