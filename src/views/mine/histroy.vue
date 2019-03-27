<template>
    <div>
        <Backs :name="title" />
    </div>
</template>

<script>
import Backs from '../tips/backs.vue';
    export default {
        name: 'Myhistory',
        components: {
            Backs
        },
        data () {
            return {
                title: '我的历史'
            }
        }
    }
</script>

<style scoped>
     div{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: white;
    }
</style>