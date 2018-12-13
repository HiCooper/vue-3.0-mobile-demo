import axios from 'axios'

// api的base_url
axios.defaults.baseURL = process.env.VUE_APP_API_ROOT
// request timeout
axios.defaults.timeout = 5000

// request interceptor
axios.interceptors.request.use(config => {
  config.headers['X-Token'] = 'token'
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

// respone interceptor
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log('err' + error) // for debug
  return Promise.reject(error)
})

export default axios
