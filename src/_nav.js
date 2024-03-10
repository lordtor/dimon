import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilFactory, cilApps } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Процессы',
    to: '/processes',
    icon: <CIcon icon={cilFactory} customClassName="nav-icon" />,
    items: [
      {
        icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
        component: CNavItem,
        name: 'Витрина',
        to: '/processes/main',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        icon: <CIcon icon={cilApps} customClassName="nav-icon" />,
        component: CNavItem,
        name: 'Новая Команда',
        to: '/processes/new_team',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
]

export default _nav
