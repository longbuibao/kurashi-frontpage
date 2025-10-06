'use client'

import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './embla-dot-button'
import { PrevButton, NextButton, usePrevNextButtons } from './embla-arrow-button'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FlatDotButton } from './flat-dot-button'

interface PropType {
  slides: Array<{ key: string, content: React.ReactElement }>
  options?: EmblaOptionsType
  useControlButton?: boolean
  useFlatControlButton?: boolean
  biggerSlider?: boolean
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, useControlButton = false, useFlatControlButton = false, biggerSlider = false } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)
  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (autoplay == null) return
    autoplay?.play()
  }, [emblaApi])
  const className = useFlatControlButton ? 'embla__size-30 theme-light' : 'embla theme-light'
  const biggerSliderClassName = biggerSlider ? 'embla__size-50 theme-light' : 'embla theme-light'

  return (
    <section className={biggerSlider ? biggerSliderClassName : className}>
      {useFlatControlButton && (
        <div className='my-7 embla__flat-dots'>
          {scrollSnaps.map((_, index) => (
            <FlatDotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={index === selectedIndex ? 'embla__flat-dot--selected' : 'embla__flat-dot'}
            />
          ))}
        </div>
      )}
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((x) => (
            <div className='embla__slide' key={x.key}>
              <div className='embla__slide__number'>{x.content}</div>
            </div>
          ))}
        </div>
      </div>
      {useControlButton && (
        <div className='embla__controls'>
          <div className='embla__buttons'>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
          <div className='embla__dots'>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default EmblaCarousel
