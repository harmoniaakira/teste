import React, { lazy } from 'react'
import SendDocProvider from 'contexts/SendDocContext'

const SendDoc = lazy(() => import('../containers/SendDoc'))

const SendDocWithContext = () => (
  <SendDocProvider>
    <SendDoc />
  </SendDocProvider>
)

const route = [
  {
    path: '/onboarding-pf-frontend/envio-de-documento',
    component: SendDocWithContext,
    exact: true
  }
]

export default route
