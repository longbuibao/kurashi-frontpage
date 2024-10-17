'use client'
import React, { useEffect, useState } from 'react'
import RangeSlider from 'react-range-slider-input'
import { ClipLoader } from 'react-spinners'
import { useFormStatus } from 'react-dom'

import './styles.css'
import { DummyIcon } from '@/components/svg-icons'

interface PriceFilterProps {
  min?: number
  max?: number
  step?: number
  colors?: Array<{ color: string, quantity: number }>
}

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()
  return (
    <button type='submit' aria-disabled={pending} className='mt-5'>
      <div className='text-secondary bg-main border p-2 border-main rounded-md px-2'>
        {!pending
          ? (
            <div className='flex flex-row gap-3 items-center'>
              <i className='fa-solid fa-filter' />
              <div className='rounded-3xl'>Lọc</div>
            </div>)
          : <div className='w-full h-full'><ClipLoader color='#e5e5e5' loading speedMultiplier={2} size={15} /></div>}
      </div>
    </button>
  )
}

const PriceFilter: React.FC<PriceFilterProps> = ({ max = 100, min = 0, step = 1, colors }) => {
  const [value, setValue] = useState([0, 1])
  useEffect(() => setValue([min, max]), [])
  return (
    <form>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row gap-5 items-center'>
          <DummyIcon />
          <div>Giá</div>
        </div>
      </div>
      <RangeSlider className='mt-10 mb-5' value={value} onInput={setValue} min={min} max={max} />
      <div className='flex flex-row justify-between mt-5'>
        <div>
          Từ <span className='text-main'>{value[0]} $</span>
        </div>
        <div>
          Đến <span className='text-main'>{value[1]} $</span>
        </div>
      </div>
      <div className='flex flex-row gap-5 items-center my-10'>
        <DummyIcon />
        <div>Màu sắc</div>
      </div>
      <div className='flex flex-col gap-3'>{colors?.map(color => (
        <div key={color.color} className='flex flex-row gap-5 items-center'>
          <input type='checkbox' name={color.color} id={color.color} />
          <label htmlFor={color.color}><div>{color.color} ({color.quantity})</div></label>
        </div>
      ))}
      </div>
      <SubmitButton />
    </form>
  )
}

export default PriceFilter
