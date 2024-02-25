import React from 'react'

interface BlogCardProps {
  imgSrc: string
  title: string
  content: React.ReactNode
  dateUpload: string
}

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, content, title, dateUpload }) => {
  return (
    <div className='flex flex-row'>
      <div><img src={imgSrc} alt='Blog Image' /></div>
      <div className='flex flex-col justify-center items-center'>
        <div>{title}</div>
        <div>{content}</div>
        <div>{dateUpload}</div>
      </div>
    </div>
  )
}

export default BlogCard
