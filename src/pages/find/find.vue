<template>
    <div class="find">
        <div class="nav-tab">
            <mt-navbar v-model="selected" fixed>
                <mt-tab-item id="1">关注</mt-tab-item>
                <mt-tab-item id="2">推荐</mt-tab-item>
                <mt-tab-item id="3">最新</mt-tab-item>
            </mt-navbar>
        </div>
        <mt-tab-container v-model="active" swipeable>
            <mt-tab-container-item id="tab-container1">
                1
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
                2
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container3">
                3
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 1,
            active: 'tab-container1'
        }
    },
    methods: {

    }
}
</script>

<style lang='scss' scoped>
    @import 'find.scss';
</style>