'use client'

import React, { useState } from 'react'
import { LinkIcon } from '../svg-icons'

interface CopyButtonProps {
  url: string
}

const CopyButton: React.FC<CopyButtonProps> = ({ url }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={handleCopy}>
        <LinkIcon />
      </button>
      {copied && (
        <div style={{
          position: 'absolute',
          top: '-30px',
          left: '0',
          background: '#333',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '12px',
          whiteSpace: 'nowrap'
        }}
        >
          Đã sao chép
        </div>
      )}
    </div>

  )
}

export default CopyButton
