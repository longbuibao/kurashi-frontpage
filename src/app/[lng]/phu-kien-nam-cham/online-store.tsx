import React from 'react'
import Image from 'next/image'

import { LinkToOnlineStoreCard, LinkToOnlineStoreCardProps } from './link-to-online-store'

const OnlineStore: React.FC = () => {
  const linksToOnlineStore: LinkToOnlineStoreCardProps[] = [
    { url: 'shopee.com', icon: <Image className='w-full' width={30} height={30} alt='Phụ kiện thép tráng men trên Shopee' src='https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/category-icon/shopee-icon.svg' />, label: 'Shopee' },
    { url: 'tiktok.com', icon: <Image className='w-full' width={30} height={30} alt='Phụ kiện thép tráng men trên Tiktok' src='https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/category-icon/tiktok-icon.svg' />, label: 'TikTok Shop' }
  ]
  return (
    <div className='flex flex-row gap-5 mb-52'>
      {linksToOnlineStore.map(x =>
        <LinkToOnlineStoreCard key={x.url} icon={x.icon} label={x.label} url={x.url} />)}
    </div>
  )
}

export default OnlineStore
