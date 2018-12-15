<template>
    <div class="common-item">
        <div class="header-info">
                        <span class="avatar">
                            <img width="25" height="25"
                                 :src="data.avatar ? data.avatar: defaultAvatar" alt="">
                        </span>
            <span class="nick-name">{{data.nickName}}</span>
        </div>
        <div class="common-content">
            <p>{{data.commonContent}}</p>

            <div class="info">
                <span class="time">{{data.createTime}}</span>
                <span class="right">
                    <i class="fa fa-thumbs-o-up" aria-hidden="true"> {{data.up}}</i>
                    <i class="fa fa-thumbs-o-down" aria-hidden="true"> {{data.down}}</i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonItem",
        props: {
            data: {
                type: Object,
                default: () => {
                },
                require: true
            }
        },
        data() {
            return {
                defaultAvatar: require('../assets/default_avatar_256px.jpg')
            }
        }
    }
</script>

<style lang="less">
    .common-item {
        padding: 10px 15px;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        .header-info {
            .nick-name {
                font-weight: bold;
            }
            display: flex;
            align-items: center;
            line-height: 30px;
            .avatar {
                width: 10%;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    border-radius: 50%;
                }
            }

        }
        .common-content {
            width: 90%;
            float: right;
            .info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0;
                .time {
                    font-size: 12px;
                    color: #999;
                }
                .right {
                    i {
                        padding: 0 20px;
                    }
                }
            }
        }
    }

</style>
