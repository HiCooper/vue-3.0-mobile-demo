import axios from '../config'
import Qs from 'qs'

/**
 * 登录
 * @param params
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const loginApi = (params) => axios.post('/user/login', Qs.stringify(params)).then(res => res.data);

/**
 * 重置密码
 * @param params
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const resetPwdApi = (params) => axios.post('/user/reset-pwd', params).then(res => res.data);


/**
 * 注册账户
 * @param params
 * @returns {Promise<AxiosResponse<any> | never>}
 */
export const registerAccountApi = (params) => axios.post('/user/register', params).then(res => res.data);



