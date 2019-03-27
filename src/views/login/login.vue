<template>
    <div class="Login">
        <div class="pages">
            <div class="mask"></div>

            <div class="top">
                DNF
                <p>你好啊，我叫赛丽亚</p>
            </div>

            <div class="footer">
                <router-link class="btns" to="/Login/loinin">注册</router-link>
                <router-link class="btns" to="/Login/signin">登录</router-link>
            </div>
        </div>
        <transition name="slide-left">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import SignIn from './signin.vue'
    import LoinIn from './loinin.vue'
    export default {
        name: 'Login',
        components: {
            SignIn,
            LoinIn
        },
        data () {
            return {
                isShow: true
            }
        },
        watch: {
            $route (to, from, next) {
                const path = to.path.split('/').length;
                if(path > 1){
                    this.isShow = false;
                } else {
                    this.isShow = true;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../styles/style.less';

    @font-face {
        font-family: font1;
        src: url('../../assets/font/hermann-gotisch_normalc.ttf')
    }

    .Login{
        width: 100%;
        height: 100%;

        .pages{
            width: 100%;
            height: 100%;
            background: url('../../assets/head.jpg') no-repeat -3.4rem 0;
            background-size: auto 100%;
            position: relative;

            .mask{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(92,219,181,0.7);
            }

            .top {
                width: 100%;
                text-align: center;
                font-size: 1.8rem;
                font-family: font1;
                position: absolute;
                top: 7rem;
                left: 0;

                p{
                    font-family: font2;
                    font-size: 1.2rem;
                    margin-top: 1rem;
                }
            }

            .footer {
                width: 80%;
                position: absolute;
                bottom: 3rem;
                left: 10%;

                a {
                    display: inline-block;
                    width: 3rem;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    text-decoration: none;
                    border-radius: 3px;

                    &:first-child{
                        background-color: white;
                        color: black;
                        margin-right: 3rem;
                    }
                }
            }
        }

        // transition{
        //     width: 100%;
        //     height: 100%;
        //     background-color: white;
        // }
    }

    
    
</style>