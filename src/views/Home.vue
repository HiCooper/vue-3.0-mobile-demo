<template>
    <div class="home">
        <div class="header">
            <span>{{userInfo.nickName}}</span>
            <span>+</span>
        </div>
        <div class="banner-img">
            <span>金色思维，给您新的商机～</span>
        </div>
        <div class="module">
            <cube-tab-bar
                    v-model="selectedLabelDefault"
                    :data="tabs"
                    @click="clickHandler"
                    @change="changeHandler">
            </cube-tab-bar>
        </div>
        <div class="content-list">
            <div class="card" v-for="(i,k) in ideaList" :key="k">
                <p>
                    <router-link :to="{path:'/detail',query: {id: i.id}}">{{i.type}}</router-link>
                </p>
                <div class="desc">
                    {{i.desc}}
                </div>
                <div class="card-footer">
                    <span class="author">{{i.author}}</span>
                    <span class="time">{{i.createTime}}</span>
                </div>
                <div class="operate">
                    <div class="item">
                        <img src="../assets/up.png" alt="">{{i.up}}
                    </div>
                    <div class="item">
                        <img src="../assets/down.png" alt="">{{i.down}}
                    </div>
                    <div class="item">
                        <img src="../assets/down.png" alt="">
                    </div>
                    <div class="item">
                        <img src="../assets/down.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        components: {},
        data() {
            return {
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
                ideaList: []
            }
        },
        mounted() {
            for (let i = 0; i < 10; i++) {
                this.ideaList.push({
                    id: i + 1,
                    type: '点子' + i,
                    desc: '测试点子内容' + i,
                    author: '昵称' + i,
                    createTime: '2018-12-14 12:00' + i,
                    up: 100 + i,
                    down: 9 + i
                })
            }

        },
        methods: {
            clickHandler(label) {
                // if you clicked home tab, then print 'Home'
                console.log(label)
            },
            changeHandler(label) {
                console.log(label)
                // if you clicked different tab, this methods can be emitted
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

        .content-list {
            padding: 0 20px;
            .card {
                margin: 20px 0;
                font-size: 12px;
                border-radius: 5px;
                background-color: white;
                box-shadow: 0 0 1px #888888;
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
                }
                .operate {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-top: 1px solid #ccc;
                    .item {
                        flex: 1;
                        padding: 7px 0;
                        color: #666;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                            width: 25px;
                        }
                    }
                }
            }

        }
        .footer {
            text-align: center;
            line-height: 50px;
        }
    }
</style>
