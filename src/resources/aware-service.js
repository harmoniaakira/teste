import Api from './api/aware-api'

const path = '/task'

const AwareService = {
  calculateROI (data, endpoint_roi) {
    return Api.request(endpoint_roi, { data, method: "POST" })
  },
}

export default AwareService
