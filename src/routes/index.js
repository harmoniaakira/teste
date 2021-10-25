import Home from './home'
import Geo from './geo'
import Geolocation from './geolocation'
import Signup from './signup'
import SignupInfo from './signupInfo'
import SendCode from './sendCode'
import SendPhoto from './sendPhoto'
import SendDoc from './sendDoc'

const routes = [
  ...Home,
  ...Geo,
  ...Geolocation,
  ...Signup,
  ...SignupInfo,
  ...SendCode,
  ...SendPhoto,
  ...SendDoc
]

export default routes
