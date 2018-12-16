<template>
    <div class="my-home">
        <cube-page
                content="content"
                title="我的">
            <template slot="content">
                <div class="banner-img">
                    <plane-animation></plane-animation>
                    <div class="avatar">
                        <img width="60" height="60" :src="defaultAvatar" alt="">
                        <span>{{userInfo.nickName||userInfo.username}}</span>
                    </div>
                </div>

                <div class="select-items">
                    <span class="item">我的点子</span>
                    <span class="item">我的资源</span>
                    <span class="item">意见反馈</span>
                    <span class="item">关于我们</span>
                </div>
            </template>
        </cube-page>
    </div>
</template>

<script>
    import CubePage from '../components/cube-page'
    import PlaneAnimation from '../components/plane-animation'

    export default {
        name: "Publish",
        components: {
            CubePage, PlaneAnimation
        },
        data() {
            return {
                userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
                id: this.$route.query.id,
                defaultAvatar: require('../assets/default_avatar_256px.jpg')
            }
        }
    }
</script>

<style lang="less">
    .my-home {

        .banner-img {
            background-color: #f0fbf2;
            font-weight: bold;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                color: #ffffff;
                padding: 20px;
                font-weight: bold;
            }

            .avatar {
                z-index: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                img {
                    border-radius: 50%;
                }
                span{
                    color: #000;
                }
            }
        }

        .select-items {
            display: flex;
            flex-direction: column;
            border-top: 8px solid #eef1f6;
            padding: 0 15px;
            .item {
                line-height: 50px;
                border-bottom: 1px solid #eef1f6;
            }
        }

    }

</style>
