<template>
    <mt-tabbar v-model="selected" fixed :style="{paddingBottom: isIphoneX ? '20px' : '0'}">
        <mt-tab-item id="home">
            <img 
                slot="icon"
                :src="selected == 'home' ?
                iconHome.active : iconHome.normal"
            >
            首页
        </mt-tab-item>
        <mt-tab-item id="find">
            <img 
                slot="icon"
                :src="selected == 'find' ? 
                iconFind.active : iconFind.normal"
            >
            发现
        </mt-tab-item>
        <mt-tab-item id="msg">
            <img 
                slot="icon"
                :src="selected == 'msg' ?
                iconMsg.active : iconMsg.normal"
            >
            消息
        </mt-tab-item>
        <mt-tab-item id="mine">
            <img 
                slot="icon" 
                :src="selected == 'mine' ?
                iconMine.active : iconMine.normal"
            >
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
export default {
    data() {
        return {
            selected: 'home',
            isIphoneX: false,
            iconHome: {
                normal: require('../../assets/img/tab/home.png'),
                active: require('../../assets/img/tab/home-active.png')
            },
            iconFind: {
                normal: require('../../assets/img/tab/find.png'),
                active: require('../../assets/img/tab/find-active.png')
            },
            iconMsg: {
                normal: require('../../assets/img/tab/msg.png'),
                active: require('../../assets/img/tab/msg-active.png')
            },
            iconMine: {
                normal: require('../../assets/img/tab/mine.png'),
                active: require('../../assets/img/tab/mine-active.png')
            },
        }
    },
    methods: {
        iphoneAdapta() {
            if (/iphone/gi.test(window.navigator.userAgent)) {
                /* iPhone X、iPhone XS */
                const x = (window.screen.width === 375 && window.screen.height === 812)
                /* iPhone XS Max */
                const xsMax = (window.screen.width === 414 && window.screen.height === 896)
                /* iPhone XR */
                const xR = (window.screen.width === 414 && window.screen.height === 896)
                if (x || xsMax || xR) {
                    localStorage.setItem('isIphoneX',true)
                    this.isIphoneX = true
                }
            }
        },
    },
    created() {
        this.iphoneAdapta()
    },
}
</script>

<style lang='scss' scoped>
    @import 'tab.scss'
</style>