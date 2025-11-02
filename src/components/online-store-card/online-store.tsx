import React from 'react'
import Image from 'next/image'

import { LinkToOnlineStoreCard, LinkToOnlineStoreCardProps } from '@/app/san-pham/phu-kien-bep/link-to-online-store'

interface OnlineStoreProps {
  isCenter?: boolean
}

const OnlineStore: React.FC<OnlineStoreProps> = ({ isCenter = false }) => {
  const linksToOnlineStore: LinkToOnlineStoreCardProps[] = [
    { url: 'shopee.com', icon: <Image className='w-full' width={15} height={15} alt='Phụ kiện thép tráng men trên Shopee' src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-phu-kien-nam-cham/dev-images/shopee.svg' />, label: 'Shopee' },
    { url: 'tiktok.com', icon: <Image className='w-full' width={15} height={15} alt='Phụ kiện thép tráng men trên Tiktok' src='https://storage.googleapis.com/kurashi_frontpage_files/images/rework-phu-kien-nam-cham/dev-images/tiktokshop.svg' />, label: 'TikTok' }
  ]
  const className = isCenter
    ? 'flex flex-row gap-10 w-fit max-md:justify-center'
    : 'flex flex-row gap-20 max-md:justify-center max-md:gap-10'
  return (
    <div className={className}>
      {linksToOnlineStore.map(x =>
        <LinkToOnlineStoreCard key={x.url} icon={x.icon} label={x.label} url={x.url} />)}
    </div>
  )
}

export default OnlineStore
