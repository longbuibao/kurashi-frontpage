'use client'

import { useEffect, useState } from 'react'

const useMediaQuery = (minWidth: number): boolean => {
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: window.innerWidth < minWidth
  })

  useEffect(() => {
    const resizeHandler = (): any => {
      const currentWindowWidth = window.innerWidth
      console.log(currentWindowWidth)
      const isDesiredWidth = currentWindowWidth < minWidth
      setState({ windowWidth: currentWindowWidth, isDesiredWidth })
    }
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [state.windowWidth])

  return state.isDesiredWidth
}

export { useMediaQuery }
