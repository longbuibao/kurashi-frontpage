'use client'
import React, { CSSProperties } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface CarouselProps {
  items: React.ReactElement[]
  indicatorStyles: CSSProperties
}

const CarouselSlider: React.FC<CarouselProps> = ({ items, indicatorStyles }) => {
  return (
    <Carousel
      renderIndicator={(onClickHandler, isSelected, index, label): React.ReactElement => {
        if (isSelected) {
          return <li style={{ ...indicatorStyles, background: '#437254' }} />
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role='button'
            tabIndex={0}
          />
        )
      }}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      autoPlay
    >
      {items}
    </Carousel>
  )
}

export default CarouselSlider
