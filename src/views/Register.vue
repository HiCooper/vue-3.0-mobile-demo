<template>
    <div class="register">
        <div class="banner">
            <span>金色思维</span>
        </div>
        <div class="register-form">
            <cube-form
                    :model="model"
                    :schema="schema"
                    :immediate-validate="false"
                    :options="options"
                    @validate="validateHandler"
                    @submit="submitHandler">
            </cube-form>
        </div>

        <div class="footer">
            <router-link to="/">返回登录</router-link>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {registerAccountApi} from "../api/account";

    export default {
        name: 'Register',
        components: {},
        data() {
            return {
                validity: {},
                valid: undefined,
                model: {
                    username: '',
                    password: '',
                    rePassword: '',
                },
                toast: undefined,
                schema: {
                    groups: [
                        {
                            legend: '账号注册',
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
                                        min: '用户名长度必须大于6'
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
                                }, {
                                    type: 'input',
                                    modelKey: 'rePassword',
                                    label: '重复密码',
                                    props: {
                                        placeholder: '请再次输入密码',
                                        type: 'password'
                                    },
                                    rules: {
                                        required: true,
                                        custom: (val) => {
                                            return val === this.model.password
                                        },
                                        min: 6
                                    },
                                    messages: {
                                        custom: '两次输入密码不一致',
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
                                    label: '注册'
                                },
                            ]
                        }
                    ]
                },
                options: {
                    scrollToInvalidField: true,
                    layout: 'standard' // classic fresh
                },
                toastTxt: ''
            }
        },
        mounted() {
            this.toast = this.$createToast({
                time: 1500,
                txt: this.toastTxt
            });
        },
        methods: {
           async submitHandler(e) {
                e.preventDefault()
               await registerAccountApi(this.model).then(res => {
                    if (res.msg === 'SUCCESS') {
                        this.$createToast({
                            time: 1500,
                            txt: '注册成功'
                        }).show();
                        sessionStorage.setItem('userInfo', res.data);
                        this.$router.push('/home')
                    } else {
                        this.$createToast({
                            time: 1500,
                            txt: res.msg
                        }).show()
                    }
                }).catch(e => {
                    console.error(e);
                })
            },
            validateHandler(result) {
                this.valid = result.valid
                console.log('validity', result.valid)
            },
        }
    }
</script>

<style lang="less">

    .register {
        background-color: #f3f4f5;
        padding: 15px;
        height: 100%;

        .banner {
            font-size: 46px;
            font-weight: bold;
            text-align: center;
            line-height: 220px;
        }

        .register-form {
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
