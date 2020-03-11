<template>
    <div class="write-answer">
        <mt-header fixed title="写评论" class="nav-top">
            <mt-button icon="back" slot="left" @click="goBack"/>
            <mt-button 
                type="default" 
                slot="right" 
                @click="release" 
                class="release"
                :style="{background: introduction ? '#26a2ff' : '#cdebff'}"
            >
                发布
            </mt-button>
        </mt-header>
        <div class="title">{{this.$route.query.title}}</div>
        <div class="write-thinks">
            <mt-field 
                :placeholder="placeholder" 
                type="textarea" 
                rows="8" 
                v-model="introduction"
            />
            <mt-checklist 
                v-model="selected" 
                :options="['匿名']" 
                class="select" 
            />
        </div>
    </div>
</template>

<script>
import { post } from '@a/js/req'
import api from './api'
import { MessageBox } from 'mint-ui'
export default {
    data() {
        return {
            placeholder: '大声说出你的想法吧~',
            introduction: '',
            selected: [],
            userInfo: this.$store.getters['user/getUserInfo'],
        }
    },
    methods: {
        goBack() {
            this.$store.commit('routes/deleteRoutes')
            const url = this.$store.getters['routes/getRoutes']
            this.$router.replace([...url].pop())
        },
        // 发布评论
        release() {
            const { introduction, userInfo } = this
            if(introduction == '' || introduction.match(/^\s+$/)) {
                this.$toast({
                    message: '内容不能为空！',
                    duration: 800
                })
                return false
            }
            const params = {
                userId: userInfo.id,
                content: introduction,
                articleId: this.$route.query.id
            }
            this.$indicator.open('提交中')
            post(api.releaseComments, params).then(res => {
                if(res.code == 200) {
                    this.introduction = ''
                    this.$indicator.close()
                    this.$toast({
                        message: res.msg,
                        duration: 800
                    })
                }
            })
        },
        isLogin() {
            MessageBox({
                title: '提示',
                message: '请先登录',
                showCancelButton: true
            })
        }
    },
    created() {
        
    },
}
</script>

<style lang='scss' scoped>
    @import 'writeAnswer.scss';
</style>