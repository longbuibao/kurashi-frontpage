import React from 'react'

import { LoginFormAdmin } from '@/components/login'
import { doLoginAdmin } from '@/actions/action'
import { auth } from '@/auth'
import AdminMenu from './components/admin-menu/admin-menu'
import { menus } from './const'

const AdminPage: React.FC = async () => {
  const session = await auth()
  if (session === null) {
    return <div className='w-1/2 mx-auto my-10'><LoginFormAdmin doLoginFunc={doLoginAdmin} title='Đăng nhập' /> </div>
  }

  return <div>{menus.map(x => <AdminMenu description={x.description} icon={x.icon} id={x.id} title={x.title} key={x.id} href={x.href} />)}</div>
}

export default AdminPage
