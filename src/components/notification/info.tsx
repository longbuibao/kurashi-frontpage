import React from 'react'

interface InfoNotificationProps {
  label: string
}

const InfoNotification: React.FC<InfoNotificationProps> = ({ label }) => {
  return (
    <div className='max-lg:text-wrap text-nowrap rounded-md bg-[#f5ed5b] px-3 py-2 text-black'>
      {label}
    </div>
  )
}

export default InfoNotification
