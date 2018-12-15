<template>
    <div class="load-more">
        <cube-button v-if="length>0" :outline="true" @click="loadMore">
            <span v-show="!loading">加载更多</span>
            <cube-loading v-show="loading"></cube-loading>
        </cube-button>
    </div>
</template>

<script>
    export default {
        name: "load-more",
        props: {
            length: {
                type: Number,
                default: 0,
                required: true
            },
            loading: {
                type: Boolean,
                default: false,
                required: true
            }
        },
        methods: {
            loadMore() {
                this.$emit('loadMore')
            }
        }
    }
</script>

<style lang="less">
    .load-more {
        text-align: center;
        padding: 20px;
        line-height: 20px;
        margin-bottom: 40px;
        .cube-loading {
            display: flex;
            justify-content: center;
        }
    }

</style>
