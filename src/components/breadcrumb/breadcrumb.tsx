import React from 'react'

interface BreadcrumbProps {
  items: any[]
  separator: any
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator }) => {
  const toRender = items.map(item => <div key={item}>{item}</div>)
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
