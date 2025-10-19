'use client'

import React, { useState, useEffect } from 'react'

const BackToTopButton = (): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    isVisible
      ? (
        <div
          onClick={scrollToTop}
          className='fixed hover:cursor-pointer border-[1px] border-main size-14 z-10 bottom-4 max-md:right-14 right-4 text-main flex items-center flex-col justify-center'
          aria-label='Back to top'
        >
          <div className='rotate-90 h-[1px] w-1/2 top-0 absolute bg-main' />
          UP
        </div>
        )
      : <></>
  )
}

export default BackToTopButton
