<template>
    <div class="login">
        <mt-header fixed title="登录" class="nav-top">
            <mt-button icon="back" slot="left" @click="goBack"/>
        </mt-header>
        <img src="@img/logo/logo.png" class="logo"/>
        <div class="form">
            <mt-field placeholder="请输入用户名" v-model="username"/>
            <mt-field placeholder="请输入密码" type="password" v-model="password"/>
            <mt-checklist v-model="check" :options="options"/>
            <mt-button class="submit" @click="login">登录</mt-button>
            <div class="bottom-text">
                <span>忘记密码</span>
                <span>没有账号？去注册</span>
            </div>
        </div>
    </div>
</template>

<script>
import { post } from '@a/js/req'
import api from './api'
export default {
    data() {
        return {
            username: '',
            password: '',
            options: ['记住密码'],
            check: ['记住密码']
        }
    },
    methods: {
        goBack() {
            this.$store.commit('routes/deleteRoutes')
            const url = this.$store.getters['routes/getRoutes']
            this.$router.replace([...url].pop())
        },
        login() {
            const { username, password } = this
            if(typeof username == 'undefined' || username == null || username == '') {
                this.$toast({
                    message: '用户名不能为空!',
                    duration: 800
                })
                return false
            } else if (typeof password == 'undefined' || password == null || password == '') {
                this.$toast({
                    message: '请输入密码!',
                    duration: 800
                })
                return false
            }
            this.$indicator.open('正在登录')
            const params = {
                iphone: username,
                password,
            }
            post(api.login, params).then(res => {
                if(res.code == 200) {
                    this.$indicator.close()
                    this.$toast({
                        message: '登录成功!',
                        duration: 800
                    })
                    this.$store.dispatch('user/setUserInfo', res.data)
                    this.goBack()
                } else {
                    this.$toast(res.msg)
                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>
    @import 'login.scss';
</style>