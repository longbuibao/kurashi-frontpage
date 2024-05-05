import React from 'react'

interface FailNotificationProps {
  label: string
}

const FailNotification: React.FC<FailNotificationProps> = ({ label }) => {
  return (
    <div className='max-lg:text-wrap text-nowrap rounded-md bg-[#e64545] px-3 py-2 text-secondary'>
      {label}
    </div>
  )
}

export default FailNotification
