import axios from '../config'

/**
 * 登录
 * @param params
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const loginApi = (params) => axios.post('/auth/login', params).then(res => res.data);

/**
 * 登出
 * @param params
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const logoutApi = (params) => axios.post('/auth/logout', params).then(res => res.data);

/**
 * 重置密码
 * @param params
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const resetPwdApi = (params) => axios.post('/account/reset-pwd', params).then(res => res.data);


/**
 * 注册账户
 * @param params
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const registerAccountApi = (params) => axios.post('/account/register', params).then(res => res.data);



