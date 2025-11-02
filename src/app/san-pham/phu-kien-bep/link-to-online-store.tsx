import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'
import Image from 'next/image'

export interface LinkToOnlineStoreCardProps {
  url: string
  icon: React.ReactElement
  label: string
}

export const LinkToOnlineStoreCard: React.FC<LinkToOnlineStoreCardProps> = ({ icon, url, label }) => {
  return (
    <Link
      href={url as any as UrlObject} target='_blank' rel='noreferrer'
      className='flex flex-row gap-3 items-center group justify-center'
    >
      <Image src='/images/RightArrow.svg' width={15} height={15} alt='Kurashi JOURNAL' className='mr-5 max-md:hidden' />
      <div>{icon}</div>
      <div>{label}</div>
    </Link>
  )
}
