<template>
    <div class="seria">
        <router-view></router-view>
    </div>
</template>

<script>
    import Se1 from './se1.vue'
    export default {
        name: 'Seria',
        components: {
            Se1
        },
        
    }
</script>

<style scoped lang="less">
    .seria{
        width: 100%;
        height: calc(~"100% - 2rem");
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
    }
</style>