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
  return Promise.reject(error)
})

// respone interceptor
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default axios
