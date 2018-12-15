<template>
    <div class="card" :data="data">
        <p>
            <router-link :to="{path:'/detail',query: {id: data.id}}">{{data.type}}</router-link>
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
                <i class="fa fa-thumbs-o-up" style="color: #42b983" aria-hidden="true"></i>{{data.up}}
            </div>
            <div class="item">
                <i class="fa fa-thumbs-o-down" style="color: red" aria-hidden="true"></i>{{data.down}}
            </div>
            <div class="item" @click="goCommonDetail">
                <i class="fa fa-commenting-o" style="color: #595aaf" aria-hidden="true"></i>
            </div>
            <div class="item">
                <i class="fa fa-share-alt" style="color: #ffc107" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeCard",
        props: {
            data: {
                type: Object,
                default: () => {},
                required: true
            }
        },
        methods:{
            goCommonDetail(){
                this.$emit('commonClick',this.data.id)
            }
        }
    }
</script>

<style lang="less">
    .card {
        margin-bottom: 20px;
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
                    font-size: 18px;
                }
            }
        }
    }
</style>
