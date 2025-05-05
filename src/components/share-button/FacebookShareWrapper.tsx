'use client'
import { FacebookShareButton, FacebookIcon } from 'react-share'

interface ShareFacebookWrapperProps {
  url: string
}

const ShareFacebookWrapper: React.FC<ShareFacebookWrapperProps> = ({ url }) => {
  return (
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  )
}

export default ShareFacebookWrapper
