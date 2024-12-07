import { AdminMenuProps } from './types'
import UserIcon from '@/components/svg-icons/user'

export const menus: AdminMenuProps[] = [
  {
    title: 'Quản lí người dùng',
    icon: <UserIcon height='25' width='25' color='#fff' />,
    id: '1',
    href: '/admin/user-management'
  }
]
