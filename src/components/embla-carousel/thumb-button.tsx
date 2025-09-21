'use client'
import React from 'react'

interface Props {
  selected: boolean
  onClick: () => void
  content: any
}

export const Thumb = (props: Props): React.ReactElement => {
  const { selected, onClick, content } = props

  return (
    <div className={'embla-thumbs__slide'.concat(selected ? ' border  border-secondary-opacity' : '')}>
      <button onClick={onClick} type='button' className='embla-thumbs__slide__number'>
        <div className='size-14'>
          {content}
        </div>
      </button>
    </div>
  )
}
