import { lazy } from 'react'

const Geolocation = lazy(() => import('../containers/Geolocation'))

const route = [
  {
    path: '/onboarding-pf-frontend/geolocalizacao',
    component: Geolocation,
    exact: true
  }
]

export default route
