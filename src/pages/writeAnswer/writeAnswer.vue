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
import { post } from '../../assets/js/req'
import api from './api'
export default {
    data() {
        return {
            placeholder: '大声说出你的想法吧~',
            introduction: '',
            selected: [],
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        // 发布评论
        release() {
            const { introduction } = this
            if(introduction == '' || introduction.match(/^\s+$/)) {
                this.$toast('内容不能为空！')
                return
            }
            const params = {
                userId: '',
                content: introduction,
                articleId: this.route.query.id
            }
            post(api.releaseComments, params).then(res => {
                if(res.code == 200) {
                    this.$toast(res.msg)
                }
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