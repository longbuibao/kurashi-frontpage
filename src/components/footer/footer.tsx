import React from 'react'
import Link from 'next/link'
import { TFunction } from 'i18next'

import { KurashiLeftBorder } from '@/components/kurashi-div'
import { Logo } from '@/components/logo'
import { LogoFacebook, LogoYoutube, LogoZalo } from '@/components/svg-icons'
import { footerLinks, phoneNumber, zaloLink } from '@/constants'
import { KurashiLink } from '@/components/kurashi-link'
import { interiorFromJapan, address, addressName, tel, socialMedia } from '@/i18n/translation-key'
import { v4 as uuidv4 } from 'uuid'

interface FooterProps {
  t: TFunction<any, any>
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <div>
      <div className='pl-3 pb-3 border-t-2 border-b-2 border-main flex flex-row justify-around max-lg:flex-col w-4/5 mx-auto'>
        <div className='flex flex-col gap-5 w-fit justify-center'>
          <div className='mb-5 flex flex-col justify-center max-lg:items-center max-lg:my-10'>
            <Link href='/'>
              <Logo imgSrc='/assets/logo/kurashi-logo.png' width={200} />
            </Link>
            <p>{t(interiorFromJapan)}</p>
          </div>
          <div className='flex flex-col gap-5 w-fit items-start'>
            <KurashiLeftBorder>{t(address)}: {t(addressName)}</KurashiLeftBorder>
            <KurashiLeftBorder>
              {t(tel)}: <a href='tel:+979988617'> {phoneNumber} </a>
            </KurashiLeftBorder>
            <KurashiLeftBorder>
              <div className='flex flex-row items-center'>
                <div>
                  {t(socialMedia)}:
                </div>
                <div className='flex flex-row gap-3 ml-2'>
                  <LogoFacebook />
                  <Link href='https://www.youtube.com/channel/UChqsY9O8M5Y70iMC5S9bdyQ' target='_blank' rel='noreferrer'>
                    <LogoYoutube />
                  </Link>
                  <Link href={zaloLink} target='_blank' rel='noreferrer'>
                    <LogoZalo />
                  </Link>
                </div>
              </div>
            </KurashiLeftBorder>
          </div>
        </div>
        <div className='flex flex-row gap-5 pt-10 w-6/12 max-lg:w-full max-lg:flex-col'>
          {footerLinks.map(footerLink =>
            <div key={uuidv4()} className='flex flex-col grow'>
              <div className='mb-5 font-semibold text-xl'>
                <KurashiLeftBorder>{t(footerLink.label)}</KurashiLeftBorder>
              </div>
              <div className='flex flex-col gap-5 w-fit max-lg:mx-auto max-lg:gap-2'>
                {footerLink.links.map(link =>
                  <KurashiLink key={uuidv4()}>
                    <Link href={`${link.url}`}>{t(link.label)}</Link>
                  </KurashiLink>)}
              </div>
            </div>
          )}
        </div>
      </div>
      <div />
    </div>
  )
}

export default Footer
