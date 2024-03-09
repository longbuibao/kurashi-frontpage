import React from 'react'
import Link from 'next/link'
import { TFunction } from 'i18next'

import { KurashiLeftBorder } from '@/components/kurashi-div'
import { Logo } from '@/components/logo'
import { LogoFacebook, LogoYoutube, LogoZalo } from '@/components/svg-icons'
import { footerLinks } from '@/constants'
import { KurashiLink } from '@/components/kurashi-link'
import { interiorFromJapan, address, addressName, tel, socialMedia } from '@/i18n/translation-key'

interface FooterProps {
  t: TFunction<any, any>
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <div>
      <div className='pl-3 pb-3 border-t-2 border-b-2 border-main flex flex-row justify-around'>
        <div className='flex flex-col gap-5 w-fit justify-center'>
          <div className='mb-5 flex flex-col justify-center'>
            <Link href='/'>
              <Logo imgSrc='/assets/logo/kurashi-logo.png' width={200} />
            </Link>
            <p className='pl-4'>{t(interiorFromJapan)}</p>
          </div>
          <div className='flex flex-col gap-5 w-fit items-start'>
            <KurashiLeftBorder>{t(address)}: {t(addressName)}</KurashiLeftBorder>
            <KurashiLeftBorder>
              {t(tel)}: <a href='tel:+84901234567'> 0901234567 </a>
            </KurashiLeftBorder>
            <KurashiLeftBorder>
              <div className='flex flex-row items-center'>
                <div>
                  {t(socialMedia)}:
                </div>
                <div className='flex flex-row gap-3 ml-2'>
                  <LogoFacebook />
                  <LogoYoutube />
                  <LogoZalo />
                </div>
              </div>
            </KurashiLeftBorder>
          </div>
        </div>
        <div className='flex flex-row gap-5 pt-10 w-6/12'>
          {footerLinks.map(footerLink =>
            <div key={footerLink.label} className='flex flex-col grow'>
              <div className='mb-5 font-semibold text-xl'>
                <KurashiLeftBorder>{t(footerLink.label)}</KurashiLeftBorder>
              </div>
              <div className='flex flex-col gap-5 w-fit'>
                {footerLink.links.map(link =>
                  <KurashiLink key={link.url}>
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
