'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './thumb-button'

interface Props {
  slides: Array<{ key: string, content: any, index: number }>
  options: any
}

const EmblaCarouselWithThumbnail: React.FC<Props> = (props) => {
  const { slides, options } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if ((emblaMainApi == null) || (emblaThumbsApi == null)) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if ((emblaMainApi == null) || (emblaThumbsApi == null)) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (emblaMainApi == null) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaMainRef}>
        <div className='embla__container'>
          {slides.map((x, index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__number'>{x.content}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla-thumbs pt-5 border-t-[0.5px] border-secondary-opacity'>
        <div className='embla-thumbs__viewport' ref={emblaThumbsRef}>
          <div className='embla-thumbs__container flex flex-row gap-5'>
            {slides.map((x, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                content={x.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarouselWithThumbnail
