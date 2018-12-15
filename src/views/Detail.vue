<template>
    <div class="detail">
        <cube-page title="查看评论">
            <div slot="content">
                <div class="base-info">
                    <p>
                        {{data.type}}
                    </p>
                    <div class="desc">
                        {{data.desc}}
                    </div>
                    <div class="card-footer">
                        <span class="author">{{data.author}}</span>
                        <span class="time">{{data.createTime}}</span>
                    </div>
                    <div class="operate">
                        <div class="item">
                            <i class="fa fa-thumbs-o-up " style="color: #42b983" aria-hidden="true"></i>{{data.up}}
                        </div>
                        <div class="item">
                            <i class="fa fa-thumbs-o-down" style="color: red" aria-hidden="true"></i>{{data.down}}
                        </div>
                        <div class="item">
                            <i class="fa fa-share-alt " style="color: #ffc107" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="common-list">
                    <div class="head">
                        <span>7条评论</span>
                        <span>资源</span>
                    </div>
                    <div class="list">
                        <common-item v-for="(i,k) in commonList" :data="i" :key="k"></common-item>
                    </div>
                </div>
                <load-more :length="10" :loading="loading"
                           @loadMore="getList"></load-more>


                <div class="bottom-operate">
                    <div :class="inputActive ? 'input-active':'not-active'">
                        <span v-show="!inputActive">评论</span>
                        <div class="header-line" v-show="inputActive">
                            <span class="label">评论给</span>
                            <span class="author">{{data.author}}</span>
                        </div>
                        <cube-textarea v-model="common"
                                       placeholder="请输入您的评论"
                                       :maxlength="300"
                                       @focus="inputActive = true"
                                       @blur="inputActive = false"
                                       indicator="indicator">
                        </cube-textarea>
                        <span v-show="!inputActive">添加资源</span>
                        <p v-show="inputActive" class="commit-btn">发布</p>
                    </div>
                </div>
            </div>
        </cube-page>
    </div>
</template>

<script>
    import CubePage from '../components/cube-page'
    import CommonItem from '../components/common-item'
    import LoadMore from '../components/load-more'

    export default {
        name: "Detail",
        components: {
            CubePage, CommonItem, LoadMore
        },
        data() {
            return {
                id: '',
                data: {
                    id: 1,
                    type: '点子',
                    desc: '测试点子内容',
                    author: '昵称',
                    createTime: '2018-12-14 12:00',
                    up: 100,
                    down: 9
                },
                loading: false,
                commonList: [],
                indicator: {
                    negative: true,
                    remain: true
                },
                inputActive: false,
                // 评论内容
                common: ''
            }
        },
        mounted() {
            this.id = this.$route.query.id;
            console.log(this.id);
            this.getList();
        },
        methods: {
            getList() {
                for (let i = 0; i < 10; i++) {
                    this.commonList.push({
                        id: i + 1,
                        nickName: '昵称' + i,
                        avatar: '',
                        commonContent: '最新的4.7.0版，收录了675个图标…如果你觉得本页图标太小...这里来看看。 如果你是名设计师，并且需要在Photoshop或Illustrator等其他桌面应用中使用，请访问 Font Awesome 矢量版.' + i,
                        createTime: '2018-12-14 12:00' + i,
                        up: 100 + i,
                        down: 9 + i
                    })
                }

            }
        }
    }
</script>

<style lang="less">
    .detail {
        .base-info {
            background-color: white;
            border-bottom: 7px solid #eee;
            p {
                line-height: 20px;
                padding: 10px 20px;
                text-align: left;
            }
            .desc {
                padding: 0 50px;
            }
            .card-footer {
                display: flex;
                justify-content: space-between;
                padding: 20px;
                .time {
                    font-size: 12px;
                    color: #999;
                }
            }
            .operate {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                border-top: 1px solid #eee;
                .item {
                    flex: 1;
                    padding: 7px 0;
                    color: #666;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    i {
                        margin-right: 5px;
                    }
                }
            }
        }
        .cube-popup {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        }

        .common-list {
            .head {
                display: flex;
                align-items: center;
                padding: 0 15px;
                line-height: 40px;
                justify-content: space-between;
                border-bottom: 1px solid #eee;
            }
        }

        .bottom-operate {
            position: fixed;
            bottom: 0;
            border-top: 1px solid #eee;
            width: 100%;
            background-color: white;
            .default {
                justify-content: space-between;
                display: flex;
                align-items: center;
                span {
                    padding: 0 10px;
                }
                .cube-textarea-wrapper {
                    flex: 2 auto;
                }
            }

            .input-active {
                padding: 0 15px;
                .header-line {
                    font-size: 13px;
                    line-height: 32px;
                    .label {
                        color: #ccc;
                        margin-right: 5px;
                    }
                    .author {
                        color: #aaa;
                        font-weight: bold;
                    }
                }
                .commit-btn {
                    color: #455fff;
                    text-align: right;
                    line-height: 32px;
                }

            }
            .not-active{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40px;
                overflow: hidden;
                span {
                    padding: 0 10px;
                }
                .cube-textarea-wrapper {
                    flex: 2 auto;
                }
            }
        }

    }

</style>
