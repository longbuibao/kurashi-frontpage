'use client'

import React from 'react'

const KurashiSlider = (): React.ReactElement => {
  const steps = [
    { label: 'TÍCH HỢP PHỤ KIỆN', active: true },
    { label: 'CHỐNG Ố', active: false },
    { label: 'DỄ THI CÔNG', active: false }
  ]

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='relative flex w-3/4 items-center'>
        <div className='absolute top-1/2 left-0 right-0 bg-main h-[1px] -z-10' />
        {steps.map((step, index) => (
          <div key={index} className='flex-1 flex flex-col items-center'>
            <div className={`w-4 h-4 border ${
                step.active
                  ? 'bg-green-700 border-green-700'
                  : 'bg-white border-gray-400'
              }`}
            />
            <span className='mt-2 text-sm font-semibold text-green-700'>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KurashiSlider
