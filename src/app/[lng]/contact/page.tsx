import React, { Suspense } from 'react'
import Link from 'next/link'

import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/contact-page-trans-key'
import { contactPageNs } from '@/i18n/settings'
import { KurashiLeftBorder, KurashiDiv } from '@/components/kurashi-div'
import { Breadcrumb } from '@/components/breadcrumb'
import { phoneNumber, googleMapLink, zaloLink } from '@/constants'
import { getMetadata } from '@/utils'
import { ContactRegister } from '@/components/contact-register'

import ContactPageSkeleton from './skeleton'
import { Metadata } from 'next'

interface ContactPageParam {
  params: { lng: string }
}

export async function generateMetadata (): Promise<Metadata> {
  const defaultTitle = 'Liên hệ'
  const pageName = 'contact-page'
  return await getMetadata(pageName, defaultTitle)
}

const ContactPage: React.FC<ContactPageParam> = async ({ params: { lng } }: ContactPageParam) => {
  const { t } = await useTranslation(lng, contactPageNs)
  const breadcrumb = [
    <Link href='/' key='a'>{t(transKey.home)}</Link>,
    <Link href='/blogs' key='b'>{t(transKey.contact)}</Link>
  ]
  return (
    <div>
      <div className='w-4/5 mx-auto flex flex-row my-10 max-lg:justify-center'>
        <div>
          <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto'>
            <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
          </div>
        </div>
      </div>
      <div className='w-4/5 mx-auto flex flex-row gap-5 max-lg:flex-col justify-center mb-10'>
        <div className='flex flex-col'>
          <div className='mb-10'>
            <KurashiLeftBorder>
              <div>Liên hệ chúng tôi</div>
            </KurashiLeftBorder>
          </div>
          <ContactRegister />
          <div className='flex flex-row gap-5 h-full max-lg:flex-col w-full'>
            <div className='flex flex-col gap-5 bg-secondary w-1/2 p-3 max-lg:w-full'>
              <KurashiLeftBorder>
                <div>{t(transKey.addressName)}</div>
              </KurashiLeftBorder>
              <div>{t(transKey.address)}</div>
              <div className='flex flex-row gap-2'>
                <KurashiLeftBorder>
                  <div>{t(transKey.tel)}</div>
                </KurashiLeftBorder>
                <a href='tel:+979988617'> {phoneNumber} </a>
              </div>
              <KurashiLeftBorder>
                <div className='hover:cursor-pointer hover:text-main'>
                  <Link href={googleMapLink} target='_blank' rel='noreferrer'>{t(transKey.map)}</Link>
                  <div className='ml-3 inline-block text-main'>
                    <i className='fa-solid fa-chevron-right' />
                  </div>
                </div>
              </KurashiLeftBorder>
            </div>
            <div className='flex flex-col gap-5 bg-secondary w-1/2 p-3 max-lg:w-full'>
              <KurashiLeftBorder>
                <div className='hover:cursor-pointer hover:text-main'>
                  <Link href='#'>{t(transKey.quickContact)}</Link>
                </div>
              </KurashiLeftBorder>
              <div className='w-fit'>
                <KurashiDiv>
                  <Link href={zaloLink} target='_blank' rel='noreferrer'>{t(transKey.zaloContact)}</Link>
                  <div className='ml-3 inline-block'>
                    <i className='fa-solid fa-chevron-right' />
                  </div>
                </KurashiDiv>
              </div>
            </div>

          </div>
        </div>
        <img className='w-1/3 max-sm:hidden max-lg:w-full' src='https://storage.googleapis.com/kurashi_frontpage_files/images/contact_theme.jpg' alt='contact-theme-page' />
      </div>
    </div>

  )
}

const SuspendContactPage: React.FC<ContactPageParam> = ({ params }) => {
  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <ContactPage params={params} />
    </Suspense>
  )
}

export default SuspendContactPage
