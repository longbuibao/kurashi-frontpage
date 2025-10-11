'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Props {
  steps: Array<{ summary: string, thumbnail: string, title: string, content: string }>
}

const KurashiSlider: React.FC<Props> = ({ steps }): React.ReactElement => {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoSlide = (): void => {
    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % steps.length)
    }, 3000)
  }

  const stopAutoSlide = (): void => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  const handleClick = (y: number): void => {
    stopAutoSlide()
    setIndex(y)
    startAutoSlide()
  }

  return (
    <div>
      <div className='w-full flex-col items-center justify-center mt-14 h-80'>
        <div key={steps[index].title} className='flex flex-row gap-10 w-4/5 mx-auto animate-fade-in max-md:flex-col'>
          <Image src={steps[index].thumbnail} width={308} height={191} alt={steps[index].content} />
          <div className='flex flex-col gap-5'>
            <div className='text-main font-bold text-xl text-center'>{steps[index].title}</div>
            <div className='text-center'>{steps[index].content}</div>
          </div>
        </div>
      </div>
      <div className='w-full bg-secondary h-[1px] relative -translate-y-16 max-md:translate-y-0 max-md:hidden'>
        <div className='w-4/5 mx-auto max-md:mt-32 max-md:w-full'>
          <div className='w-4/5 max-md:w-full max-md:justify-center mx-auto flex justify-between items-center -translate-y-[1.125rem]'>
            {steps.map((x, y) => {
              const isActive = index === y
              const className = `size-9 rounded-full transition-colors ${isActive ? 'bg-main text-secondary' : 'bg-secondary border-black'}`
              const textClassName = isActive ? 'text-main font-bold' : 'text-black font-bold'
              return (
                <div key={x.title} onClick={() => handleClick(y)} className='hover:cursor-pointer flex flex-col items-center gap-5'>
                  <button className={className}>
                    <i className='fa-solid fa-chevron-right' />
                  </button>
                  <div className={textClassName}>{x.summary.toUpperCase()}</div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

    </div>

  )
}

export default KurashiSlider
