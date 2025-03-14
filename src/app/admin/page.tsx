import React from 'react'
import Link from 'next/link'

const AdminPage: React.FC = async () => {
  return (
    <div>
      <div>KURASHI DASHBOARD</div>
      <div><Link href='/'>BLOG</Link></div>
    </div>
  )
}

export default AdminPage
