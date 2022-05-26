import React from 'react'

const AddUser = React.lazy(() => import('./views/crm/AddUser'))
const ListUsers = React.lazy(() => import('./views/crm/ListUsers'))
const ShowPatient = React.lazy(() => import('./views/crm/ShowPatient'))

const routes = [
  { path: '/', name: 'Home', element: ListUsers },
  { path: '/adduser', name: 'Form Control', element: AddUser },
  { path: '/listusers', name: 'Form Control', element: ListUsers },
  { path: '/patient/:id', name: 'Form Control', element: ShowPatient },
]

export default routes
