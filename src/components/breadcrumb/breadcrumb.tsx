import React from 'react'
import { v4 as uuidv4 } from 'uuid'

interface BreadcrumbProps {
  items: any[]
  separator: any
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator }) => {
  const toRender = items.map(item => <div key={uuidv4()}>{item}</div>)
  const result = []
  for (let i = 0; i < toRender.length; i++) {
    result.push(toRender[i])
    if (i < toRender.length - 1) {
      result.push(separator)
    }
  }
  return result
}

export default Breadcrumb
