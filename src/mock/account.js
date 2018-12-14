// import { param2Obj } from '@/utils'


export default {
    loginApi: request => {
        console.log(request)
        let {username} = JSON.parse(request.body);
        console.log(username);
        return {
            data: {
                msg: 'SUCCESS',
                code: '200',
                data: {
                    username: username,
                    nickName: '卡卡西'
                }
            }
        }
    }
}
