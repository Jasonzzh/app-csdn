<template>
    <div>
        <router-view />
        <v-tab />
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
    }
}
</script>