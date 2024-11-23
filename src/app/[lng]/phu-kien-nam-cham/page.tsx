import React from 'react'

import PhuKienNamCham from './phu-kien-nam-cham'
import { auth } from '@/auth'
import { LoginPage } from '@/components/login'

const PhuKienNamChamPage: React.FC = async () => {
  const session = await auth()
  return session !== null
    ? <PhuKienNamCham />
    : <LoginPage />
}

export default PhuKienNamChamPage
