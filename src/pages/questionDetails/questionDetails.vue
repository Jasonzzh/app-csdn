<template>
    <div class="question-details">
        <mt-header fixed title="问题详情" class="nav-top">
            <router-link to="/" slot="left">
                <mt-button icon="back"/>
            </router-link>
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
            <div class="comment-list">
                <div class="comment-item" v-for="item in commentList" :key="item.index">
                    <div class="content-top">
                        <img :src="item.imgPic" class="imgPic"/>
                        <div class="comment-userInfo">
                            <div class="name">{{ item.userName }}</div>
                            <div class="autograph">
                                {{ item.autograph }}
                            </div>
                        </div>
                        <div class="feel-like">
                            <img src="../../assets/img/like.png"/>
                            {{ item.commtentLike }}
                        </div>
                    </div>
                    <div class="comment-text">{{ item.content }}</div>
                </div>
            </div>
            <div class="no-comment" v-if="loadingStatus && !commentList.length">暂无评价</div>
            <div class="loading-status" v-else>
                <span v-if="loadingStatus">没有更多了~</span>
                <mt-spinner type="triple-bounce" color="#26a2ff" v-else></mt-spinner>
            </div>
        </div>
        <div class="foot-bar" :style="{paddingBottom: isIphoneX ? '26px' : '10px'}" v-show="!autofocus">
            <div class="bar-box">
                <input class="input" :placeholder="placeholder" :value="inputValue"/>
                <div class="comment-nums">
                    <img src="../../assets/img/commentIcon.png"/>
                    <span>1</span>
                </div>
                <div class="good-like">
                    <img src="../../assets/img/like.png"/>
                    <span>1</span>
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
            deatilsData: {},
            commentList: [
                {
                    userName: 'Aliez',
                    content: '是，行业大势是，行业大势蓬勃发展程的中国，勤劳的中国人民。我相信有许多996的人想跳出来，又会有许多人不知道怎么才能跳进996。换句话来说，你不去做自然就有人来抢着做，那么你还要做吗。只能讲目前的竞争太激烈了。加班公司的计算只乘以基本公司，而绩效才是工资的大头。又有几家公司把工作日的加班为员工结算加班费了。这么多的职场人都在默默接受着加班，又有多少人真的拿起的劳动保护权益去维护自己的利益。大众普遍意义上的接受加班文化以后，那么不加班的那个人反而成为了异类，这有多可怕。特立独行的人不是因为自身的能力不足见识不够被淘汰，大多数时候是被洪流中裹挟的众人你一拳我一脚打压下去的，这是一种恶性的竞争，只要你还在一个小池塘里，不去努力挣钱饵料，怎么能被捉起来卖个好价钱呢哈哈哈哈。当然了，自然会有那么一天，高福利社会来临时，就像今天的法国一样。',
                    commtentLike: '234',
                    autograph: '交通强国、铁路先行',
                    imgPic: 'https://ask-image.zhaopin.cn/discover_images/hFbvylx5ANRvbRuJ1571391540.jpg?x-oss-process=image/resize,h_200'
                }
            ],
            loadingStatus: false,
            placeholder: '快来说点什么吧~',
            inputValue: '',
            autofocus: false,
        }
    },
    methods: {
        getDetailsData() {
            const params = {
                id: this.$route.query.id
            }
            post(api.getDeatilsData,params).then(res => {
                if(res.code == 200) {
                    this.deatilsData = res.data
                }
            })
        },
    },
    created() {
        this.getDetailsData()
    },
}
</script>

<style lang='scss' scoped>
    @import './questionDetails.scss';
</style>