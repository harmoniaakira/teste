import React, { lazy } from 'react'
import SignupProvider from 'contexts/SignupContext'


const Signup = lazy(() => import('../containers/Signup'))

const SignupWithContext = () => (
  <SignupProvider>
    <Signup />
  </SignupProvider>
)


const route = [
  {
    path: '/onboarding-pf-frontend/cadastro',
    component: SignupWithContext,
    exact: true
  }
]

export default route
