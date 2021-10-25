import api from './base'

const baseApi = api('api')

const Api = {
  request (path, options) {
    return baseApi.request(path, options)
  }
}

export default Api
