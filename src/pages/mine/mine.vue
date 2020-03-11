<template>
    <div class="mine">
        <div class="user-info">
            <div class="user-login" @click="goProfile">
                <div class="user-img">
                    <img :src="userInfo ? userInfo.userPic : defaultImage"/>
                </div>
                <div class="user-action">
                    <span v-if="!userInfo">登录</span>
                    <span v-if="!userInfo">/</span>
                    <span v-if="!userInfo">注册</span>
                    <span v-if="userInfo">{{userInfo.name}}</span>
                    <div class="user-name">用户名: {{userInfo ? userInfo.id : '无'}}</div>
                </div>
                <div class="arrow-right-box">
                    <img src="@img/mine/arrow-right.png" class="arrow-right"/>
                </div>
            </div>
            <div class="user-statistics">
                <div class="item">
                    <div class="num">0</div>
                    <div>关注</div>
                </div>
                <div class="item">
                    <div class="num">0</div>
                    <div>粉丝</div>
                </div>
                <div class="item">
                    <div class="num">0</div>
                    <div>访客</div>
                </div>
                <div class="item">
                    <div class="num">0</div>
                    <div>排名</div>
                </div>
            </div>
        </div>
        <div class="action-list">
            <div class="action-item">
                <div class="icon" style="background: rgb(230,74,82);">
                    <img src="@img/mine/article.png"/>
                </div>
                <div class="item-text">
                    <div class="name">我的博客</div>
                    <div class="article-num">0 篇 <img src="@img/mine/arrow-right.png"/></div>
                </div>
            </div>
            <div class="action-item">
                <div class="icon" style="background: rgb(66,211,164);">
                    <img src="@img/mine/collection.png"/>
                </div>
                <div class="item-text">
                    <div class="name">我的收藏</div>
                    <div class="article-num">0 篇 <img src="@img/mine/arrow-right.png"/></div>
                </div>
            </div>
            <div class="action-item">
                <div class="icon" style="background: rgb(255,183,60);">
                    <img src="@img/mine/write-blog.png"/>
                </div>
                <div class="item-text">
                    <div class="name">写博客</div>
                    <div class="article-num">
                        <img src="@img/mine/arrow-right.png"/>
                    </div>
                </div>
            </div>
            <div class="action-item">
                <div class="icon" style="background: rgb(159,166,184);">
                    <img src="@img/mine/setup.png"/>
                </div>
                <div class="item-text">
                    <div class="name">设置</div>
                    <div class="article-num">
                        <img src="@img/mine/arrow-right.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: this.$store.getters['user/getUserInfo'],
            defaultImage: require('@img/mine/default-image.png')
        }
    },
    methods: {
        goLogin() {
            this.$store.dispatch('routes/addRoutes', 'login')
            this.$router.replace({
                path: 'login'
            })
        },
        goProfile() {
            const { userInfo } = this
            if(!userInfo) this.goLogin()
        }
    }
}
</script>

<style lang='scss' scoped>
    @import 'mine.scss';
</style>