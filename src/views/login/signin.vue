<template>
    <div class="signin">
        <Backs class="backs" :name="title" />
        <div class="mask"></div>

        <div class="title">
            Seria Kirmin
            <p>勇士，欢迎来到阿拉德大陆</p>
        </div>

        <div class="contrainer">
            <div class="inputForm">
                <input type="text" placeholder="勇士의姓名" v-model="username">
            </div>

            <div class="inputForm">
                <input type="text" placeholder="看不见의符文" v-model="userpsw">
            </div>

            <div class="btnForm"> 
                <button type="button" class="btn" v-on:click="signin">登入</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Backs from '../tips/backs.vue'

    export default {
        name: 'Signin',
        components: {
            Backs
        },
        data () {
            return {
                username: '',
                userpsw: '',
                title: ''
            }
        },
        computed: {
            checkData () {
                if(this.username == ''){
                    alert('勇士，您的姓名？')
                    return false;
                }
                if(this.userpsw == ''){
                    alert('符文故障!!!')
                    return false;
                }
                return {
                    name: this.username,
                    psw: this.userpsw
                }
            }
        },
        methods: {
            signin () {
                const check = this.checkData;
                const info = this.$store.state.userInfo;
                for(let i in info){
                    if(info[i].uName == check.name && info[i].upsw == check.psw){
                        this.$store.commit('userCheck', info[i].uid);
                        this.$router.replace('/');
                        return false;
                    }
                }
                alert('查无此人')
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../styles/style.less';
    .signin{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: url('../../assets/head.jpg') no-repeat 0 0;
        background-size: auto 100%;

        .backs{
            background-color:rgba(217,240,201, 0.5);
            border: none;
            color:#b386fb;
        }

        .mask{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 1.2rem;
            background-color:rgba(217,240,201, 0.5)
        }

        .title{
            margin: 3rem 0;
            font-family: font1;
            font-size: 1rem;
            position: relative;
            z-index: 2;

            p{
                font-family: font2;
            }
        }

        .contrainer{
            position: relative;
            z-index: 2;

            button{
                letter-spacing: 4px;
            }
        }
    }
</style>