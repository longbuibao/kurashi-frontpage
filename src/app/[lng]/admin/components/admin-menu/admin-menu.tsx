import React from 'react'
import { AdminMenuProps } from '../../types'
import Link from 'next/link'

const AdminMenu: React.FC<AdminMenuProps> = ({ title, description, icon, href }) => {
  return (
    <Link href={href}>
      <div>{title}</div>
      <div>{description}</div>
      <div>{icon}</div>
    </Link>
  )
}

export default AdminMenu
