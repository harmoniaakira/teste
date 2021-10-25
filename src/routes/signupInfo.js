import { lazy } from 'react'

const Home = lazy(() => import('../containers/SignupInfo'))

const route = [
  {
    path: '/onboarding-pf-frontend/cadastro/informacoes',
    component: Home,
    exact: true
  }
]

export default route
