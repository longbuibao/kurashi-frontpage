import React, { Suspense } from 'react'
import Link from 'next/link'

import { Input } from '@/components/input'
import { useTranslation } from '@/i18n'
import * as transKey from '@/i18n/contact-page-trans-key'
import { contactPageNs } from '@/i18n/settings'
import { KurashiLeftBorder, KurashiDiv } from '@/components/kurashi-div'

import ContactPageSkeleton from './skeleton'

interface ContactPageParam {
  params: { lng: string }
}

export const metadata = {
  title: 'Liên hệ'
}

const ContactPage: React.FC<ContactPageParam> = async ({ params: { lng } }: ContactPageParam) => {
  const { t } = await useTranslation(lng, contactPageNs)
  return (
    <div className='w-4/5 mx-auto flex flex-row gap-5 max-lg:flex-col justify-center my-2'>
      <div className='flex flex-col'>
        <form className='w-full flex flex-col gap-5 flex-1' action='' method='post'>
          <Input placeholder={t(transKey.name)} />
          <Input placeholder={t(transKey.email)} />
          <Input placeholder={t(transKey.phoneNumber)} />
          <textarea rows={15} className='border-b border-secondary w-full h-70' name='' id='' placeholder={t(transKey.messageContent)} />
          <div className='w-fit mx-auto'>
            <KurashiDiv>
              <button className='block' type='submit'>{t(transKey.sendButtonContent)}</button>
            </KurashiDiv>
          </div>
        </form>
        <div className='bg-secondary flex flex-col gap-5 p-2'>
          <KurashiLeftBorder>
            <div>{t(transKey.addressName)}: {t(transKey.address)}</div>
          </KurashiLeftBorder>
          <KurashiLeftBorder>
            <div className='hover:cursor-pointer hover:text-main'>
              <Link href='#'>{t(transKey.map)}</Link>
            </div>
          </KurashiLeftBorder>
          <KurashiLeftBorder>
            <div className='hover:cursor-pointer hover:text-main'>
              <Link href='#'>{t(transKey.quickContact)}</Link>
            </div>
          </KurashiLeftBorder>
          <div className='w-fit mx-auto'>
            <KurashiDiv>
              <Link href='#zalolink'>{t(transKey.zaloContact)}</Link>
              <div className='ml-3 inline-block'>
                <i className='fa-solid fa-chevron-right' />
              </div>
            </KurashiDiv>
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
