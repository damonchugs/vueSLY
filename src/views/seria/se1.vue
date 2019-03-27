<template>
    <div class="se1 serias">
        <div :class="anis">
            Seria kirmin
            <p>{{text}}</p>
        </div>

        <div class="btns">点击</div>
    </div>
</template>

<script>
    export default {
        name: 'Seria1',
        data () {
            return {
                anis: 'zoomInUp',
                text: '今天也是元气满满的一天'
            }
        },
        methods: {
            animate () {
                this.anis = 'zoomInLeft';
            }
        }
    }
</script>

<style scoped lang="less">
    .se1{
        width: 100px;
        height: 100px;
        position: fixed;
        background: url('../../assets/head.jpg') no-repeat -2rem 0;
        background-size: auto 100%;

        &>div:first-child{
            text-align: center;
            font-size: 1.2rem;
            font-family: font;
            margin: 3rem 0;
        }
    }
</style>