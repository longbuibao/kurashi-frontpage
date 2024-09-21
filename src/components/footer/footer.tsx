import React from 'react'
import Link from 'next/link'
import { TFunction } from 'i18next'

import { Logo } from '@/components/logo'
import { LogoFacebook, LogoYoutube, LogoZalo } from '@/components/svg-icons'
import { footerLinks, phoneNumber, zaloLink } from '@/constants'
import { address, addressName, tel } from '@/i18n/translation-key'
import { v4 as uuidv4 } from 'uuid'

interface FooterProps {
  t: TFunction<any, any>
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <div className='bg-[#24292e] text-secondary'>
      <div className='w-4/5 mx-auto border-b-2 border-secondary pb-7'>
        <div className='mb-5 pt-10 pb-5'>
          <Link href='/'>
            <Logo width={300} srcImage='https://storage.googleapis.com/kurashi_frontpage_files/images/logo_white.png' />
          </Link>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row w-1/2'>
            {footerLinks.map(footerLink =>
              <div key={uuidv4()} className='flex flex-col grow'>
                <div className='flex flex-col gap-5 w-fit max-lg:gap-2'>
                  {footerLink.links.map(link =>
                    <Link key={uuidv4()} href={`${link.url}`}>{t(link.label)}</Link>)}
                </div>
              </div>
            )}
          </div>
          <div className='flex flex-col w-1/4'>
            <div className='text-2xl'>SNS</div>
            <div className='flex flex-row gap-3 ml-2 pt-5'>
              <LogoFacebook />
              <Link href='https://www.youtube.com/channel/UChqsY9O8M5Y70iMC5S9bdyQ' target='_blank' rel='noreferrer'>
                <LogoYoutube />
              </Link>
              <Link href={zaloLink} target='_blank' rel='noreferrer'>
                <LogoZalo />
              </Link>
            </div>
          </div>
          <div className='w-1/4'>
            <div className='text-2xl'>ACCESS</div>
            <div className='flex flex-col gap-5 items-start pt-5'>
              <div>{t(address)}: {t(addressName)}</div>
              <div>
                {t(tel)}: <a href='tel:+979988617'> {phoneNumber} </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer
