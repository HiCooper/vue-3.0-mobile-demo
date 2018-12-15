<template>
    <div class="login">
        <div class="banner">
            <span>金色思维</span>
        </div>
        <div class="login-form">
            <cube-form
                    ref="loginFormRef"
                    :model="model"
                    :schema="schema"
                    :immediate-validate="false"
                    :options="options"
                    @validate="validateHandler"
                    @submit="submitHandler">
            </cube-form>
        </div>
        <div class="footer">
            <router-link to="/register">注册账号</router-link>
            |
            <router-link to="/forgetPassword">忘记密码</router-link>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {loginApi} from "../api/account";
    import md5 from 'md5'
    export default {
        name: 'login',
        components: {},
        data() {
            return {
                validity: {},
                valid: undefined,
                // todo 测试用，需删除
                model: {
                    username: 'admin123',
                    password: '123456',
                },
                schema: {
                    groups: [
                        {
                            legend: '账号密码登录',
                            fields: [
                                {
                                    type: 'input',
                                    modelKey: 'username',
                                    label: '用户名',
                                    props: {
                                        placeholder: '请输入身份证或手机号'
                                    },
                                    rules: {
                                        required: true,
                                        min: 6
                                    },
                                    messages: {
                                        min: '密码长度必须大于6'
                                    },
                                    // validating when blur
                                    trigger: 'blur'
                                }, {
                                    type: 'input',
                                    modelKey: 'password',
                                    label: '密码',
                                    props: {
                                        placeholder: '请输入密码',
                                        type: 'password'
                                    },
                                    rules: {
                                        required: true,
                                        min: 6
                                    },
                                    messages: {
                                        min: '密码长度必须大于6'
                                    },
                                    // validating when blur
                                    trigger: 'blur'
                                },

                            ]
                        },
                        {
                            fields: [
                                {
                                    type: 'submit',
                                    label: '登录'
                                },
                            ]
                        }
                    ]
                },
                options: {
                    scrollToInvalidField: true,
                    layout: 'standard' // classic fresh
                },
            }
        },
        methods: {
            submitHandler() {
                const p1 = this.$refs.loginFormRef.validate();
                if (p1) {
                    let params = {
                        username: this.model.username,
                        password: md5(this.model.password)
                    }
                    loginApi(params).then(res => {
                        console.log(res);
                        if (res.msg === 'SUCCESS') {
                            this.$createToast({
                                time: 1500,
                                txt: '登录成功'
                            }).show();
                            sessionStorage.setItem('userInfo', JSON.stringify(res.data));
                            this.$router.push('/')
                        } else {
                            this.$createToast({
                                time: 1500,
                                txt: res.msg
                            }).show();
                        }
                    }).catch(e=>{
                        console.error(e);
                    })
                }

            },
            validateHandler(result) {
                this.valid = result.valid
                console.log('validity', result.valid)
            },
        }
    }
</script>

<style lang="less">

    .login {
        background-color: #f3f4f5;
        padding: 15px;
        height: 100%;

        .banner {
            font-size: 46px;
            font-weight: bold;
            text-align: center;
            line-height: 220px;
        }

        .login-form {
            .cube-btn {
                border-radius: 32px;
            }
            .cube-form_groups {
                .cube-form-group-legend {
                    padding: 10px 15px;
                    font-size: 30px;
                    color: #001528;
                }
                .cube-form-group:nth-child(2) {
                    background-color: #f3f4f5;
                }
            }
        }
        .footer {
            text-align: center;
            line-height: 50px;
        }
    }
</style>
