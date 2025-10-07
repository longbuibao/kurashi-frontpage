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
import localFont from 'next/font/local'
import { KurashiLogoSvg } from '@/components/logo'
import Link from 'next/link'

export const metadata = {
  title: 'Trang chủ Kurashi',
  metadataBase: new URL('https://kurashi.com.vn')
}

interface RootProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'], weight: '200' })

const gtFont = localFont({
  src: [
    {
      path: '../../public/fonts/GT_Super_Display_Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-gtFont',
  display: 'swap'
})

const RootLayout: React.FC<RootProps> = async ({ children }): Promise<React.ReactElement> => {
  const { t } = await useTranslation(lng)
  const footerItems = [
    {
      title: 'Hệ thống phân phối chính hãng',
      content: 'Tra cứu điểm bán hàng chính hãng gần bạn nhất trên cả nước'
    },
    {
      title: 'Catalog',
      content: 'Thông tin sản phẩm và bộ sưu tập mới nhất'
    },
    {
      title: 'Tài khoản my K',
      content: 'Hệ thống giao dịch số và điểm thưởng dành riêng cho đối tác'
    }
  ]

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
    <html lang={lng} dir={dir(lng)} className={`${gtFont.variable}`}>
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
        <div className='flex flex-row justify-between w-4/5 mx-auto py-36'>
          {footerItems.map(x => {
            return (
              <Link key={x.title} href='#'>
                <div className='flex flex-col gap-5 w-96'>
                  <div className='flex flex-row items-center gap-10'>
                    <i className='text-5xl fa-solid fa-chevron-right' />
                    <div className='font-bold text-xl'>{x.title}</div>
                  </div>
                  <div className='mt-5'>{x.content}</div>
                </div>
              </Link>
            )
          })}
        </div>
        <Footer t={t} />
        <div className='bg-[#24292e] pt-5 overflow-hidden'>
          <div className='text-secondary hover:cursor-default text-left w-4/5 mx-auto text-xs'>Copyright 2024 Kurashi Corporation. All rights reserved</div>
          <div className='w-4/5 mx-auto mt-10 translate-y-10'><KurashiLogoSvg width='300' height='52' color='white' /></div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
