<template>
    <div class="home">
        <div class="header">
            <span>{{userInfo.nickName}}</span>
            <router-link to="/publish"><i class="fa fa-plus" aria-hidden="true"></i></router-link>
        </div>
        <div class="banner-img">
            <span>金色思维，给您新的商机～</span>
        </div>
        <div :class="checkFix?'module fix-top':'module'" ref="moduleType">
            <cube-tab-bar
                    v-model="selectedLabelDefault"
                    :data="tabs"
                    @click="clickHandler"
                    @change="changeHandler">
            </cube-tab-bar>
        </div>
        <div :class="checkFix?'content-list mgt57':'content-list'">
            <div class="view-wrapper">
                <home-card :data="i" v-for="(i,k) in ideaList" :key="k" @commonClick="goCommonDetail"></home-card>
                <div class="notice" v-if="customPullDown">
                    <p v-if="noticeTxt">{{noticeTxt}}</p>
                </div>
                <load-more :length="ideaList.length" :loading="loading" @loadMore="loadMore"></load-more>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeCard from '../components/HomeCard'
    import LoadMore from '../components/load-more'

    export default {
        name: 'home',
        components: {
            HomeCard, LoadMore
        },
        data() {
            return {
                size: 10,
                offset: 20,
                userInfo: JSON.parse(sessionStorage.getItem('userInfo')),
                validity: {},
                valid: undefined,
                model: {
                    username: '',
                    password: '',
                },
                selectedLabelDefault: '点子',
                tabs: [{
                    label: '点子',
                    icon: 'cubeic-vip'
                }, {
                    label: '资源',
                    icon: 'cubeic-star'
                }],
                ideaList: [],
                top: 194,
                //筛选条件dom于顶部距离
                disPath: '',
                checkFix: false,
                // 显示加载
                customPullDown: false,
                loading: false,
                noticeTxt: ''

            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
            this.disPath = this.$refs.moduleType.getBoundingClientRect().top;
            this.onPullingUp();
        },
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.checkFix = scrollTop >= this.disPath;
            },
            clickHandler(label) {
                // if you clicked home tab, then print 'Home'
                console.log(label)
            },
            changeHandler(label) {
                console.log(label)
                // if you clicked different tab, this methods can be emitted
            },
            loadMore() {
                this.loading = true;
                this.onPullingUp();
            },
            onPullingUp() {
                // 模拟更新数据
                setTimeout(() => {
                    if (Math.random() > 0.1) {
                        // 如果有新数据
                        let items = [];
                        for (let i = 0; i < 10; i++) {
                            items.push({
                                id: i + 1,
                                type: '点子' + i,
                                desc: '测试点子内容' + i,
                                author: '昵称' + i,
                                createTime: '2018-12-14 12:00' + i,
                                up: 100 + i,
                                down: 9 + i
                            })
                        }
                        this.ideaList = this.ideaList.concat(items)
                        this.customPullDown = false;
                        this.noticeTxt = ''
                    } else {
                        // 如果没有新数据
                        this.noticeTxt = '没有更多数据了';
                        this.customPullDown = true;

                    }
                    this.loading = false
                }, 1000)
            },
            goCommonDetail(id) {
                this.$router.push({path: '/detail', query: {id}})
            }
        }
    }
</script>

<style lang="less">

    .home {
        height: 100%;
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 40px;
            padding: 2px 20px;
            font-size: 20px;
        }

        .banner-img {
            background-image: url("../assets/banner.png");
            background-size: contain;
            font-weight: bold;
            text-align: center;
            height: 150px;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            span {
                color: #ffffff;
                padding: 20px;
                font-weight: bold;
            }
        }
        .module {
            background-color: #f3f4f5;
        }
        .content-list {
            padding: 0 20px 20px;
            margin-top: 10px;
            .view-wrapper {
                .notice {
                    text-align: center;
                }
            }
        }
        .mgt57 {
            margin-top: 57px;
        }
        .footer {
            text-align: center;
            line-height: 50px;
        }
    }

    .fix-top {
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
    }
</style>
