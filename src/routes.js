import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Processes
const Processes = React.lazy(() => import('./views/0processes/processes_main/Processes'))
const NewTeam = React.lazy(() => import('./views/0processes/processes_main/NewTeam'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/processes/main', name: 'Processes', element: Processes },
  { path: '/processes/new_team', name: 'NewTeam', element: NewTeam },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
]

export default routes
