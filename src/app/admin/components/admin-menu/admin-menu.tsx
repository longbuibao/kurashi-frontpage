import React from 'react'
import { AdminMenuProps } from '../../types'
import Link from 'next/link'
import { UrlObject } from 'url'

const AdminMenu: React.FC<AdminMenuProps> = ({ title, icon, href }) => {
  const hack = href as unknown as UrlObject
  return (
    <Link href={hack} className='flex justify-center items-center gap-3 border p-2 border-main rounded-lg shadow-lg'>
      <div className='bg-main rounded-lg p-2 text-white'>{icon}</div>
      <div>{title}</div>
    </Link>
  )
}

export default AdminMenu
