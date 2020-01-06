<template>
    <div>
        <router-view />
        <v-tab v-show="isTab"/>
    </div>
</template>

<script>
import Tab from '../components/tab/tab'
export default {
    data() {
        return {}
    },
    methods: {

    },
    components: {
        'v-tab': Tab,
    },
    computed: {
        isTab () {
            return this.$store.state.device.isTab
        }
    }
}
</script>