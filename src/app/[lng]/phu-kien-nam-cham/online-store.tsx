import React from 'react'
import Image from 'next/image'

import { LinkToOnlineStoreCard, LinkToOnlineStoreCardProps } from './link-to-online-store'

const OnlineStore: React.FC = () => {
  const linksToOnlineStore: LinkToOnlineStoreCardProps[] = [
    { url: 'tiktok.com', icon: <Image width={30} height={30} alt='Phụ kiện thép tráng men trên Tiktok' src='https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/category-icon/tiktok-shop-icon.png' />, label: 'TikTok Shop' },
    { url: 'shopee.com', icon: <Image width={30} height={30} alt='Phụ kiện thép tráng men trên Shopee' src='https://storage.googleapis.com/kurashi_frontpage_files/phu-kien-thep-trang-men/category-icon/shopee-icon.png' />, label: 'Shopee' }
  ]
  return (
    <div className='flex flex-row gap-5 mb-32'>
      {linksToOnlineStore.map(x =>
        <LinkToOnlineStoreCard key={x.url} icon={x.icon} label={x.label} url={x.url} />)}
    </div>
  )
}

export default OnlineStore
