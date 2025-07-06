import './globals.css'
import './embla.css'

import { GoogleAnalytics } from '@next/third-parties/google'

import { dir } from 'i18next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { navItems } from '@/constants'
import { useTranslation } from '@/i18n'
import ProgressBarProviders from '@/components/progress-bar-provider'
import prisma from '@/lib/prisma'
import { Inter } from 'next/font/google'
import { BackToTopButton } from '@/components/back-to-top'
import { lng } from '@/app/const'

export const metadata = {
  title: 'Trang chủ Kurashi',
  metadataBase: new URL('https://kurashi.com.vn')
}

interface RootProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'], weight: '200' })

const RootLayout: React.FC<RootProps> = async ({ children }): Promise<React.ReactElement> => {
  const { t } = await useTranslation(lng)
  console.log(process.env.YOUTUBE_API_KEY)

  const productsRaw = await prisma.product.findMany({
    take: 3,
    where: { isAvailable: true },
    include: {
      category: { select: { name: true, id: true } },
      ProductColor: true,
      ProductTag: true
    }
  })

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <GoogleAnalytics gaId='G-XCHH0MSJ6B' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' crossOrigin='anonymous' />
      </head>
      <body className={inter.className}>
        <div className='sticky top-0 z-50'>
          <Nav products={productsRaw} links={navItems.map(item => { return { label: t(item.label), url: item.url } })} />
        </div>
        <ProgressBarProviders>
          {children}
        </ProgressBarProviders>
        <BackToTopButton />
        <Footer t={t} />
        <div className='bg-[#24292e] pt-5 pb-10'>
          <div className='text-secondary hover:cursor-default text-left w-4/5 mx-auto text-xs'>Copyright 2024 Kurashi Corporation. All rights reserved</div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
