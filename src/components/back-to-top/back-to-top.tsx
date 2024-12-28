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
        <button
          onClick={scrollToTop}
          className='fixed size-16 max-md:size-10 z-10 bottom-4 right-4 bg-main text-kurashi-bg-main rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
          aria-label='Back to top'
        >
          ↑
        </button>
        )
      : <></>
  )
}

export default BackToTopButton
