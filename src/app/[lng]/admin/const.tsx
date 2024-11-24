import { AdminMenuProps } from './types'
import UserIcon from '@/components/svg-icons/user'

export const menus: AdminMenuProps[] = [
  { title: 'Quản lí người dùng', description: 'Quản lí người dùng description', icon: <UserIcon />, id: '1', href: '/admin/user-management' }
]
