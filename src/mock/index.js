import Mock from 'mockjs'

import AccountAPI from './account'

import {loginApi} from '../api/account'

Mock.setup({
  timeout: '350-600'
})

// 文章相关
Mock.mock(loginApi.url, 'post', AccountAPI.loginApi)

export default Mock
