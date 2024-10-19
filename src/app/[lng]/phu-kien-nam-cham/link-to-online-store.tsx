import React from 'react'
import Link from 'next/link'

export interface LinkToOnlineStoreCardProps {
  url: string
  icon: React.ReactElement
  label: string
}

export const LinkToOnlineStoreCard: React.FC<LinkToOnlineStoreCardProps> = ({ icon, url, label }) => {
  return (
    <Link href={url} target='_blank' rel='noreferrer' className='flex flex-row gap-2 px-5 py-2 items-center justify-center bg-secondary-opacity border border-main rounded-3xl'>
      <div className='w-8 h-8'>{icon}</div>
      <div>{label}</div>
    </Link>
  )
}
