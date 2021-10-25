import { lazy } from 'react'

const Geo = lazy(() => import('../containers/Geo'))

const route = [
  {
    path: '/onboarding-pf-frontend/geo',
    component: Geo,
    exact: true
  }
]

export default route
