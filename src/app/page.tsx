import React from 'react'

import { Nav } from '@/components/nav'

const Page = (): React.ReactElement => {
  return (
    <Nav links={[{ label: 'home', url: '#' }]} />
  )
}

export default Page
