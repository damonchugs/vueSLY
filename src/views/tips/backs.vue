<template>
    <div class="headBack">
        <i class="fa fa-angle-left" v-on:click="goBack"></i>
        <span>{{headerName}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Backs',
        data () {
            return {
                headerName: ''
            }
        },
        created () {
            this.headerName = this.$attrs.name;
        },
        methods: {
            goBack () {
                window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
            }
        }
    }
</script>

<style scoped lang='less'>
    .headBack{
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 1rem;
        text-align: left;
        border-bottom: 1px solid #ccc;
        position: relative;
        display: flex;

        i {
            position: absolute;
            left: 0;
            top: 0;
            padding: 0 10px;
        }

        span {
            display: inline-block;
            width: 100%;
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: 0.5rem;
            text-align: center;
        }
        
    }
</style>