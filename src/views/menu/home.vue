<template>
    <div class="home">
        <div class="container">
            {{text}}

            <p v-on:click="animate">her said</p>
        </div>
        <Seria v-if="isShow" :class="anis" :name="sename" :style="anis" /> 
    </div>
</template>

<script>
    import Seria from '../seria/seria.vue'
    export default {
        name: 'home',
        data () {
            return {
                text: '今天，也是充满希望的一天',
                sename: 'default',
                anis: 'animate',
                isShow: false,
                num: 0,
                aniArr:[
                    'bounce', 'flash', 'bounceInLeft', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 
                    'jello', 'heartBeat', 'lightSpeedIn',
                ]
            }
        },
        components: {
            Seria
        },
        computed: {
            
        },
        methods: {
            changeScence (n, a) {
                var _this = this;
                var nums = this.num+1;
                this.isShow = true;
                this.sename = n;
                this.anis = a;
                this.num = (nums < this.aniArr.length)?nums:0;
                setTimeout(function () { _this.reSetScence() }, 1000);
            },
            reSetScence () {
                this.sename = 'default';
                this.anis = 'animate';
                this.isShow = false;
            },
            animate () {
                let style = this.aniArr[this.num];
                this.changeScence('se1', style+' animated');
            }
        }
    }
</script>

<style lang="less" scoped>
    .home{
        font-size: 0.24rem;

        p{
            line-height: 1rem;
            height: 1rem;
        }

        .container{
            width: 100%;
            height: 100%;
            background-color: #a7ddbb;
            font-family: font2;
            text-align: center;
            font-size: 1rem;
            line-height: 88vh;

            p {
                width: 100%;
                height: 2rem;
                margin: 0 auto;
                text-align: center;
                position: absolute;
                bottom: 4rem;
                font-size: 1rem;
                line-height: 2rem;
            }
        }
    }
</style>