'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

interface ProgressBarProvidersProps { children: React.ReactNode }

const ProgressBarProviders: React.FC<ProgressBarProvidersProps> = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height='4px'
        color='#437254'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default ProgressBarProviders
