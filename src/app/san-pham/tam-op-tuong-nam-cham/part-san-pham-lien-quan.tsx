import React from 'react'
import { useInView } from 'react-intersection-observer'

import * as c from './const'
import SanPhamLienQuan from '@/components/san-pham-lien-quan/san-pham-lien-quan'

interface PartSanPhamLienQuanProps {
  setCurrentInViewDivId: (id: string) => void
}

const PartSanPhamLienQuan: React.FC<PartSanPhamLienQuanProps> = ({ setCurrentInViewDivId }) => {
  const { ref } = useInView({
    threshold: 1,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(c.sanPhamLienQuan)
      }
    },
    root: null
  })

  return (
    <div ref={ref} id={c.sanPhamLienQuan}>
      <SanPhamLienQuan />
    </div>
  )
}

export default PartSanPhamLienQuan
