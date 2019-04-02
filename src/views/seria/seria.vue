<template>
    <div class="seria" :style="backImg">
        <div class="container">
            <p>{{title}}</p>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Se1 from './se1.vue';
    import seria_summer from '../../assets/seria_summer.jpg';
    import seria_first from '../../assets/seria_first.jpg';
    import seria_summer2 from '../../assets/seria_summer2.jpg';
    import seria_longhair from '../../assets/seria_longhair.jpg';
    
    const imgArr = [
        seria_summer, seria_first, seria_summer2, seria_longhair,
        seria_summer, seria_first, seria_summer2, seria_longhair,
        seria_summer, seria_first, seria_summer2, seria_longhair
    ];

    export default {
        name: 'Seria',
        components: {
            Se1
        },
        data () {
            return {
                title: '',
                backImg: {
                    background: `url(${seria_first}) no-repeat 0 0`,
                    backgroundSize: '100% auto'
                },
                imgs: 0,
                seria: `${this.$store.state.seria}`
            }
        },
        watch: {
            title (val, valo) {
                console.log(val, valo, 'asd');
            }
        }, 
        updated () {
            
        },
        created () {
            let name = imgArr[this.$attrs.img];
            this.title = this.$attrs.title;
            this.imgs++;
            this.backImg = `background: url(${name}) no-repeat 0 0; background-size: 100% auto;`;
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