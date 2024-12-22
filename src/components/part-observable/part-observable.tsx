import React from 'react'
import { useInView } from 'react-intersection-observer'

interface PartObservableProps {
  setCurrentInViewDivId: (id: string) => void
  className?: string
  id: string
  threshold: number
  children: React.ReactNode
}

const PartObservable: React.FC<PartObservableProps> = ({ setCurrentInViewDivId, className = '', id, threshold, children }): React.ReactElement => {
  const { ref } = useInView({
    threshold,
    onChange: (inView, _) => {
      if (inView) {
        setCurrentInViewDivId(id)
      }
    },
    root: null
  })
  return (
    <div id={id} ref={ref} className={className}>
      {children}
    </div>
  )
}

export default PartObservable
