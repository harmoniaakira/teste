import api from './base'

const baseApi = api('https://mobileauth.aware-demos.com/knomi')

const Api = {
  request (path, options) {
    return baseApi.request(path, options)
  }
}

export default Api
