'use client'
import * as React from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

interface ImageGalleryProps {
  imgSrc: string[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imgSrc }) => {
  const [index, setIndex] = React.useState(-1)
  const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128]
  const slides = imgSrc.map((src) => {
    const width = 1920
    const height = 1080
    return {
      src,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => {
        const breakpointHeight = Math.round((height / width) * breakpoint)
        return {
          src,
          width: breakpoint,
          height: breakpointHeight
        }
      })
    }
  })

  return (
    <div>
      <PhotoAlbum
        layout='rows' photos={slides} targetRowHeight={150} onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        plugins={[Zoom]}
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  )
}

export default ImageGallery
