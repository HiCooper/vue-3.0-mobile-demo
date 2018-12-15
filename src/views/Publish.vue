<template>
    <div class="publish">
        <cube-page
                content="content"
                title="发布">
            <div class="content" slot="content">
                <div class="type">
                    <span class="label">发布类型：</span>
                    <div class="value">
                        <cube-checker
                                v-model="checkerValue"
                                :options="options"
                                type="radio">
                        </cube-checker>
                    </div>
                </div>
                <div class="detail">
                    <span class="label">发布内容：</span>
                    <div class="value">
                        <cube-textarea v-model="detailInfo"
                                       placeholder="输入发布内容"
                                       :maxlength="1000"
                                       :autofocus="true"
                                       :autoExpand="true"
                                       indicator="indicator"></cube-textarea>
                    </div>
                </div>
                <div class="id-check">
                    <span class="label">身份验证：</span>
                    <cube-input v-model="checkCode" placeholder="输入您的安全码"></cube-input>
                </div>

                <cube-button type="submit">提交</cube-button>
            </div>
        </cube-page>
    </div>
</template>

<script>
    import CubePage from '../components/cube-page'

    export default {
        name: "Publish",
        components: {
            CubePage
        },
        data() {
            return {
                checkerValue: '表白',
                options: [
                    {
                        text: '表白',
                        value: '表白'
                    },
                    {
                        text: '预言',
                        value: '预言'
                    },
                    {
                        text: '承诺',
                        value: '承诺',
                    }
                ],
                // 发布内容
                detailInfo: '',
                indicator: {
                    negative: true,
                    remain: true
                },
                // 身份验证
                checkCode: ''

            }
        }
    }
</script>

<style lang="less">
    .publish {
        .content {
            margin: 10px;
            .type {
                display: flex;
                align-items: center;
                padding: 15px 0;
                border-bottom: 1px solid #f3f3f3;
                .label {
                    width: 90px;
                }
                .cube-checker-item {
                    border-radius: 18px;
                    background-color: #eee;
                }
                .cube-checker-item_active {
                    color: black;
                    background-color: #56bae4;
                    &::after {
                        border: none;
                    }
                }
            }

            .detail {
                padding: 15px 0;
                margin-bottom: 15px;
                .label {
                    line-height: 42px;
                    width: 90px;
                }
            }

            .id-check {
                display: flex;
                align-items: center;
                padding: 15px 0;
                .label {
                    width: 90px;
                }
                .cube-input {
                    width: calc(100% - 90px);
                }
            }
            .cube-btn {
                border-radius: 25px;
            }

        }
    }

</style>
