<template>
    <div class="home">
        <div class="container">
            {{text}}
            <p v-on:click="animate">her said</p>
        </div>
        <Seria v-if="isShow" :class="anis" :name="sename" :img="img" :title="title" /> 
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
                img: 'seria_summer.jpg',
                title: '你好啊！这里的人都叫我赛丽亚',
                isShow: false,
                num: 0,
                aniArr:[
                    { ani: 'bounce', img: '0', tit: '我，就在这里等着你!'},
                    { ani: 'flash', img: '1', tit: '你好啊！这里的人都叫我赛丽亚'},
                    { ani: 'bounceInLeft', img: '2', tit: '我会一直等着你的！'},
                    { ani: 'rubberBand', img: '3', tit: '看来你真的要去冒险了，不用跟我道别，我会一直陪在你身边的！'},
                    { ani: 'shake', img: '4', tit: '一定要记得我！'},
                    { ani: 'swing', img: '5', tit: '过于疏远会显得淡漠，过于亲密又难免疲惫，只有保持适当的距离。'},
                    { ani: 'tada', img: '6', tit: '我来这里，是为了帮助那些有困难的冒险家。如果您需要我帮忙，随时来找我'},
                    { ani: 'wobble', img: '7', tit: '千万别在森林里迷路！'},
                    { ani: 'jello', img: '8', tit: '真正的勇士从来不会在自己的责任面前逃走。'},
                    { ani: 'bounce', img: '9', tit: '看见你平安无事，我就放心了！'},
                    { ani: 'heartBeat', img: '10', tit: '你还会回来吗'},
                    { ani: 'lightSpeedIn', img: '11', tit: '今天，也是充满希望的一天'}
                ]
            }
        },
        components: {
            Seria
        },
        computed: {
            
        },
        methods: {
            changeScence (n, a, t, m) { // 改变情景
                var _this = this;
                var nums = this.num+1;
                this.sename = n;
                this.anis = a;
                this.title = t;
                this.img = m;
                this.num = (nums < this.aniArr.length)?nums:0;
                this.isShow = true;
                this.timeOut(this.num, 3000);
                
            },
            timeOut (num, ms) {
                var _this = this;
                setTimeout(function () {
                    new Promise((resolve, reject) => {
                        _this.reSetScence();
                        resolve(num);
                    }).then(r => {
                        if(r !== 0){
                            _this.animate();
                        }
                    })
                }, ms)
            },
            reSetScence () { // 重置
                this.sename = 'default';
                this.anis = 'animate';
                this.isShow = false;
            },
            animate () { // 设置情景
                let style = this.aniArr[this.num].ani;
                let title = this.aniArr[this.num].tit;
                let img = this.aniArr[this.num].img;
                this.changeScence('se1', style+' animated', title, img);
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