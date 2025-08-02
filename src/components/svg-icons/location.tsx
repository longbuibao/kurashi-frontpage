import React from 'react'

interface LocationIconProps {
  width?: string
  height?: string
  color?: string
}

const LocationIcon: React.FC<LocationIconProps> = ({ height = '40', width = '40', color = '#000' }) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z' stroke='#000000' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
export default LocationIcon
