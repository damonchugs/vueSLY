<template>
    <div class="loinin">
        <Backs class="backs" :name="Names" />
        <div class="mask"></div>

        <div class="container">
            <div class="title">
                勇士，<br /> 我们还会再相遇吗？
            </div>

            <div class="forms">
                <div class="inputForm">
                    <input type="text" placeholder="勇士의姓名" v-model="username">
                </div>

                <div class="inputForm">
                    <input type="text" placeholder="看不见의符文" v-model="userpsw">
                </div>

                <div class="btnForm"> 
                    <button type="button" class="btn" v-on:click="logininName">载入通信证</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Backs from '../tips/backs.vue'

    export default {
        name: 'Loinin',
        components: {
            Backs
        },
        data () {
            return {
                Names: '注册',
                username: '',
                userpsw: ''
            }
        },
        computed: {
            checkInfo () {
                var st = this.$store.state.userInfo;
                if(this.username == ''){
                    alert('勇士，您的姓名？')
                    return false;
                }

                for(let i in st){
                    if(st[i].username == this.username){
                        alert('呀，重名了');
                        return false;
                    }
                }
                
                if(this.userpsw == ''){
                    alert('符文故障!!!')
                    return false;
                }
                return { name: this.username, psw: this.userpsw };
            },
            checkSame () {
                var st = this.$store.state.userInfo;
                
            }
        },
        methods: {
            logininName () {
                var data = this.checkInfo;
                this.$store.commit('userLoinin', data);
                this.$router.push('/Login/signin')
            }
        }    
    }
</script>

<style scoped lang="less">
    @import '../../styles/style.less';
    .loinin{
        width: 100%;
        height: 100%;
        background: url('../../assets/head.jpg') no-repeat 0 0;
        background-size: auto 100%;
        position: fixed;
        top: 0;
        left: 0;

        .backs{
            background-color: rgba(215,239,191, 0.7)
        }

        .mask{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 1.2rem;
            background-color: rgba(215,239,191, 0.7)
        }

        .container {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 1.2rem;
            left: 0;

            .title{
                width: 100%;
                height: 6rem;
                margin-top: 3rem;
                line-height: 2rem;
                font-family: font2;
                font-size: 1rem;

            }
        }

        

    }
</style>