import React from 'react'

interface TikTokShopProps {
  width?: string
  height?: string
}

const TikTokShopIcon: React.FC<TikTokShopProps> = ({ height = '40', width = '40' }) => {
  return (
    <svg
      version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
      viewBox='0 0 512 512' xmlSpace='preserve'
    >
      <g>
        <g>
          <path
            fill='#FFFFFF' d='M427.5,481h-343C55,481,31,457,31,427.5v-343C31,55,55,31,84.5,31h342.9C457,31,481,55,481,84.5v342.9C481,457,457,481,427.5,481z'
          />
          <path
            fill='#A5A5A5' d='M427.5,481.1h-343c-29.6,0-53.6-24.1-53.6-53.6v-343c0-29.6,24.1-53.6,53.6-53.6h342.9c29.6,0,53.7,24.1,53.7,53.6v342.9C481.1,457,457.1,481.1,427.5,481.1z M84.5,31.1c-29.4,0-53.4,23.9-53.4,53.4v343c0,29.4,23.9,53.4,53.4,53.4h343c29.4,0,53.4-24,53.4-53.5V84.5c0-29.4-24-53.4-53.5-53.4H84.5z'
          />
        </g>
        <g>
          <path d='M365.9,208.6c-2.6-23.4-8.7-42.6-32.2-42.6c-5.2,0-11.2,0-17.6,0c-2.7-33.2-28.7-59.2-60.4-59.2c-31.7,0-57.7,26.1-60.4,59.2c-6.2,0-11.9,0-17,0c-23.5,0-29.5,19.2-32.2,42.6c-4.4,38.8-17.3,154-17.3,154c0,23.5,19.1,42.6,42.6,42.6h169.2c23.5,0,42.6-19.1,42.6-42.6C383.2,362.6,370.2,247.4,365.9,208.6z M257,136.2c21.4,0,28.9,11.9,31.5,29.9c-21.1,0-44.4,0-65.5,0C226.7,148.1,235.6,136.2,257,136.2z' />
          <g>
            <path
              fill='#FF004F' d='M288,264.8c9.7,6.9,21.5,11,34.3,11v-24.6c-2.4,0-4.8-0.3-7.2-0.8v19.4c-12.8,0-24.6-4.1-34.3-11v50.2c0,25.1-20.4,45.5-45.5,45.5c-9.4,0-18.1-2.8-25.3-7.7c8.3,8.4,19.8,13.7,32.6,13.7c25.1,0,45.5-20.4,45.5-45.5L288,264.8L288,264.8z M296.9,240c-4.9-5.4-8.2-12.4-8.9-20.1v-3.2h-6.8C282.9,226.5,288.7,234.9,296.9,240L296.9,240z M225.8,327.6c-2.8-3.6-4.3-8-4.2-12.6c0-11.5,9.3-20.8,20.8-20.8c2.1,0,4.3,0.3,6.3,1V270c-2.4-0.3-4.8-0.5-7.2-0.4v19.6c-2-0.6-4.2-1-6.3-1c-11.5,0-20.8,9.3-20.8,20.8C214.3,317.1,219,324.1,225.8,327.6z'
            />
            <path
              fill='#FFFFFF' d='M280.8,258.8c9.7,6.9,21.5,11,34.3,11v-19.4c-7.1-1.5-13.5-5.3-18.2-10.4c-8.1-5.1-14-13.5-15.7-23.3h-17.9V315c0,11.5-9.3,20.7-20.8,20.7c-6.8,0-12.8-3.2-16.6-8.2c-6.8-3.4-11.5-10.5-11.5-18.6c0-11.5,9.3-20.8,20.8-20.8c2.2,0,4.3,0.3,6.3,1v-19.6c-24.7,0.5-44.6,20.7-44.6,45.5c0,12.4,4.9,23.6,13,31.8c7.2,4.9,16,7.7,25.3,7.7c25.1,0,45.5-20.4,45.5-45.5L280.8,258.8L280.8,258.8z'
            />
            <path
              fill='#00F2EA' d='M315.1,250.4v-5.2c-6.4,0-12.8-1.8-18.2-5.2C301.7,245.3,308.1,248.9,315.1,250.4z M281.1,216.7c-0.2-0.9-0.3-1.9-0.4-2.8v-3.2H256v98.3c0,11.5-9.3,20.7-20.8,20.7c-3.4,0-6.6-0.8-9.4-2.2c3.8,5,9.8,8.2,16.6,8.2c11.5,0,20.8-9.3,20.8-20.7v-98.3H281.1z M241.5,269.6V264c-2.1-0.3-4.2-0.4-6.2-0.4c-25.1,0-45.5,20.4-45.5,45.5c0,15.8,8,29.6,20.2,37.8c-8-8.2-13-19.4-13-31.8C196.9,290.2,216.8,270.1,241.5,269.6z'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
export default TikTokShopIcon