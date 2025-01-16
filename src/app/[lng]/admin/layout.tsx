import React from 'react'

import AdminMenu from './components/admin-menu/admin-menu'
import { menus } from './const'

interface AdminLayoutProps {
  children: React.ReactNode
  params: { lng: string }
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, params }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap w-[20%] justify-center items-center flex-col gap-5 ml-3'>
        {menus.map(x =>
          <div key={x.id}>
            <AdminMenu icon={x.icon} id={x.id} title={x.title} href={x.href} />
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

export default AdminLayout
