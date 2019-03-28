<template>
    <div class="seria">
        <div class="container" :style="backImg">
            <p>{{title}}</p>
        </div>
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
        data () {
            return {
                title: '',
                backImg: '',
            }
        },  
        created () {
            console.log(12);
            this.title = this.$attrs.title;
            this.backImg = 'background-image: url(../../assets/'+this.$attrs.img+')';
        }
    }
</script>

<style scoped lang="less">
    .seria{
        width: 100%;
        height: calc(~"100% - 2rem");
        position: absolute;
        top: 0;
        left: 0;
        background: url('../../assets/seria_summer.jpg') no-repeat 0 0;
        background-size: 100% auto;

        .container{
            width: 100%;
            height: 100%;
            background-color: rgba(184,119,188, 0.7);

            p {
                font-family: font2;
                font-size: 1rem;
                padding-top: 40vh;
            }
        }

        
    }
</style>