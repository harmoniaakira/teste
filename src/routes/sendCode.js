import React, { lazy } from 'react'
import SendCodeProvider from 'contexts/SendCodeContext'

const SendCode = lazy(() => import('../containers/SendCode'))

const SendCodeWithContext = () => (
  <SendCodeProvider>
    <SendCode />
  </SendCodeProvider>
)

const route = [
  {
    path: '/onboarding-pf-frontend/envio-de-codigo',
    component: SendCodeWithContext,
    exact: true
  }
]

export default route
