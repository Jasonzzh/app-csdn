<template>
    <div class="question-details">
        <mt-header fixed title="问题详情" class="nav-top">
            <mt-button icon="back" slot="left" @click="goBack"/>
        </mt-header>
        <div class="article-detail">
            <div class="title">{{ deatilsData.title }}</div>
            <div class="userInfo">
                <img :src="deatilsData.authorPortrait ? deatilsData.authorPortrait : defaultPortrait" class="userPic"/>
                <div class="name">
                    <div class="user-name">
                        {{ deatilsData.authorName }}
                    </div>
                    <div class="time">
                        {{ deatilsData.releaseDate }}
                    </div>
                </div>
                <div class="follow">关注</div>
            </div>
            <div class="content">
                <div v-html="deatilsData.content" space="nbsp"/>
            </div>
        </div>
        <div class="comment-box">
            <div class="comment-title">评价</div>
            <ul class="comment-list"
                v-infinite-scroll="loadMore"
                :infinite-scroll-disabled="loading"
                infinite-scroll-distance="0"
            >
                <li class="comment-item" v-for="item in commentList" :key="item.index">
                    <div class="content-top">
                        <img :src="item.userPic" class="imgPic"/>
                        <div class="comment-userInfo">
                            <div class="name">{{ item.name }}</div>
                            <div class="autograph">
                                {{ item.autograph }}
                            </div>
                        </div>
                        <div class="feel-like">
                            <img src="../../assets/img/like.png"/>
                            {{ item.commentLike }}
                        </div>
                    </div>
                    <div class="comment-text">{{ item.content }}</div>
                </li>
            </ul>
            <div class="no-comment" v-if="loadingStatus && !commentList.length">暂无评价</div>
            <div class="loading-status" v-else>
                <span v-if="loadingStatus">没有更多了~</span>
                <mt-spinner type="triple-bounce" color="#26a2ff" v-else></mt-spinner>
            </div>
        </div>
        <div class="foot-bar" :style="{paddingBottom: isIphoneX ? '26px' : '10px'}" v-show="!autofocus">
            <div class="bar-box">
                <div class="input" @click="goWriteAnswer">
                    <img src="../../assets/img/writeIcon.png"/>{{ placeholder }}
                </div>
                <div class="comment-nums">
                    <img src="../../assets/img/commentIcon.png"/>
                    <span>{{ commentList.length }}</span>
                </div>
                <div class="good-like">
                    <img src="../../assets/img/like.png"/>
                    <span>{{ deatilsData.clickLike }}</span>
                </div>
                <img src="../../assets/img/likeIcon.png" class="collection"/>
                <img src="../../assets/img/shareIcon.png" class="share"/>
            </div>
        </div>
    </div>
</template>

<script>
import { post } from '../../assets/js/req'
import api from './api'
export default {
    data() {
        return {
            isIphoneX: localStorage.getItem('isIphoneX'),
            defaultPortrait: require('../../assets/img/default-image.png'),
            deatilsData: {}, // 文章详情
            commentList: [], // 评论
            placeholder: '快来说点什么吧~',
            autofocus: false,
            pageSize: 6,
            pageNo: 0,
            loading: true, // 触底加载节流
            loadingStatus: false, // 加载状态
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        // 获取文详情数据
        getDetailsData() {
            const params = {
                id: this.$route.query.id
            }
            post(api.getDeatilsData, params).then(res => {
                if(res.code == 200) {
                    this.deatilsData = res.data
                }
            })
        },
        // 获取评论
        getComments() {
            const params = {
                id: this.$route.query.id,
                pageNo: this.pageNo,
                pageSize: this.pageSize,
            }
            return new Promise((resolve, reject) => {
                post(api.getComments, params).then(res => {
                    if(res.code == 200) {
                        this.commentList = [...this.commentList, ...res.data]
                        if(res.data.length < this.pageSize) {
                            this.loadingStatus = true
                        }
                        resolve()
                    } else {
                        reject()
                    }
                })
            })
        },
        // 懒加载评论
        async loadMore() {
            const { loading, loadingStatus } = this
            if (loading) {
                return
            } else {
                this.loading = true
            }
            if (loadingStatus) return
            this.pageNo += 1
            await this.getComments()
            this.loading = false
        },
        // 跳转写回答
        goWriteAnswer() {
            this.$router.push({
                path: 'writeAnswer',
                query: {
                    id: this.$route.query.id,
                    title: this.deatilsData.title
                }
            })
        }
    },
    created() {
        this.getDetailsData()
        this.getComments().then(() => {
            this.loading = false
        })
    },
}
</script>

<style lang='scss' scoped>
    @import './questionDetails.scss';
</style>