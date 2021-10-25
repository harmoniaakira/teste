import React, { lazy } from 'react'
import SendPhotoProvider from 'contexts/SendPhotoContext'

const SendPhoto = lazy(() => import('../containers/SendPhoto'))

const SendPhotoWithContext = () => (
  <SendPhotoProvider>
    <SendPhoto />
  </SendPhotoProvider>
)

const route = [
  {
    path: '/onboarding-pf-frontend/foto',
    component: SendPhotoWithContext,
    exact: true
  }
]

export default route
