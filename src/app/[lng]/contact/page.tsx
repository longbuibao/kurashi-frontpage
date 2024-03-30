import React, { Suspense } from 'react'
import Link from 'next/link'

import { Input } from '@/components/input'
import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/contact-page-trans-key'
import { contactPageNs } from '@/i18n/settings'
import { KurashiLeftBorder, KurashiDiv } from '@/components/kurashi-div'
import { Breadcrumb } from '@/components/breadcrumb'
import { phoneNumber } from '@/constants'

import ContactPageSkeleton from './skeleton'

interface ContactPageParam {
  params: { lng: string }
}

export const metadata = {
  title: 'Liên hệ'
}

const ContactPage: React.FC<ContactPageParam> = async ({ params: { lng } }: ContactPageParam) => {
  const { t } = await useTranslation(lng, contactPageNs)
  const breadcrumb = [
    <Link href='/' key='a'>{t(transKey.home)}</Link>,
    <Link href='/blogs' key='b'>{t(transKey.contact)}</Link>
  ]
  return (
    <div className='w-4/5 mx-auto flex flex-row gap-5 max-lg:flex-col justify-center my-2'>
      <div className='flex flex-col'>
        <div className='flex flex-row mb-10'>
          <div>
            <div className='flex flex-row gap-5 items-center justify-center self-start ml-auto'>
              <Breadcrumb items={breadcrumb} separator={<i className='fa-solid fa-chevron-right' />} />
            </div>
          </div>
        </div>
        <form className='w-full flex flex-col gap-5 flex-1' action='' method='post'>
          <Input placeholder={t(transKey.name)} />
          <Input placeholder={t(transKey.email)} />
          <Input placeholder={t(transKey.phoneNumber)} />
          <textarea rows={15} className='border-b border-secondary w-full h-70' name='' id='' placeholder={t(transKey.messageContent)} />
          <div className='w-fit mb-2 flex flex-row'>
            <button className='block' type='submit'>{t(transKey.sendButtonContent)}</button>
            <div className='ml-3 inline-block text-main'>
              <i className='fa-solid fa-chevron-right' />
            </div>
          </div>
        </form>
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
                <Link href='#'>{t(transKey.map)}</Link>
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
                <Link href='#zalolink'>{t(transKey.zaloContact)}</Link>
                <div className='ml-3 inline-block'>
                  <i className='fa-solid fa-chevron-right' />
                </div>
              </KurashiDiv>
            </div>
          </div>

        </div>
      </div>
      <img className='w-1/3 max-lg:w-full' src='/assets/contact.jpg' alt='contact-theme-page' />
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
