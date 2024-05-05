import React from 'react'

interface SussesNotificationProps {
  label: string
}

const SussesNotification: React.FC<SussesNotificationProps> = ({ label }) => {
  return (
    <div className='max-lg:text-wrap text-nowrap rounded-md bg-main px-3 py-2 text-secondary'>
      {label}
    </div>
  )
}

export default SussesNotification
