import React from 'react'
import Link from 'next/link'

const UserManagementPage: React.FC = () => {
  return (
    <div className='w-full bg-kurashiX'>
      <div>Thông tin người dùng</div>
      <Link href='/admin/user-management/add-new-user'>Thêm người dùng mới</Link>
    </div>
  )
}

export default UserManagementPage
