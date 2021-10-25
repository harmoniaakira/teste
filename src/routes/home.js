import { lazy } from 'react'

const Home = lazy(() => import('../containers/Home'))

const route = [
  {
    path: '/onboarding-pf-frontend',
    component: Home,
    exact: true
  }
]

export default route
