<template>
    <div class="index">
        <mt-header fixed :title="title" class="nav-top"/>
        <div class="contain" :style="{paddingBottom: isIphoneX ? '80px' : '60px'}">
            <mt-loadmore 
                :top-method="loadTop" 
                ref="loadmore"
            >
                <ul class="list-box"
                    v-infinite-scroll="loadMore"
                    :infinite-scroll-disabled="loading"
                    infinite-scroll-distance="0"
                >
                    <li v-for="item in dataList" :key="item.index" class="item">
                        <div class="time">{{ item.releaseDate }}</div>
                        <div class="content" @click="goDetails(item.id)">
                            <div class="title">{{ item.title }}</div>
                            <div class="cover-image">
                                <img v-lazy.container="item.smallImageUrl"/>
                            </div>
                            <div class="tag">点击参与讨论</div>
                            <div class="button">查看详情 <img :src="arrowRight"/></div>
                        </div>
                    </li>
                    <div class="loading-status" v-if="dataList.length">
                        <ul class="load-cricle" v-if="!loadingStatus">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span v-else>我也是有底线的~</span>
                    </div>
                </ul>
            </mt-loadmore>
        </div>
    </div>
</template>

<script>
import { post } from '@a/js/req'
import api from './api'
export default {
    data() {
        return {
            title: '首页',
            isIphoneX: false,
            page: 0, // 起始页码为0
            nums: 10,
            category: 6,
            dataList: [],
            arrowRight: require('@img/arrow-right.png'),
            loading: true, // 触底加载节流
            loadingStatus: false, // 加载状态
        }
    },
    methods: {
        onLoad() {
            const params = {
                page: this.page,
                nums: this.nums,
                category_id: this.category,
            }
            return new Promise((resolve,reject) => {
                post(api.getDataList,params).then(res => {
                    if(res.code == 200) {
                        if(res.data.length < this.nums) {
                            this.loadingStatus = true
                        }
                        this.dataList = [...this.dataList, ...res.data]
                        resolve()
                    } else {
                        reject()
                    }
                })
            })
        },
        // 下拉刷新
        async loadTop() {
            this.page = 0
            this.dataList = []
            await this.onLoad()
            this.$refs.loadmore.onTopLoaded()
        },
        // 懒加载
        async loadMore() {
            const { loading, loadingStatus } = this
            if (loading) {
                return
            } else {
                this.loading = true
            }
            if (loadingStatus) return
            this.page += 1
            await this.onLoad()
            this.loading = false
        },
        // 跳转进详情页
        goDetails(id) {
            console.log(this.$store.getters['routes/getRoutes'])
            const url = 'questionDetails?id=' + id
            this.$store.commit('routes/addRoutes', url)
            console.log(this.$store.getters['routes/getRoutes'])
            this.$router.replace({
                path: 'questionDetails',
                query: {
                    id,
                }
            })
        }
    },
    created() {
        this.isIphoneX = localStorage.getItem('isIphoneX')
        this.onLoad().then(() => {
            this.loading = false
        })
    },
}
</script>

<style lang="scss" scoped>
    @import 'index.scss';
</style>