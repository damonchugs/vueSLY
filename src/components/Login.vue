<template>
    <div class="login" id="login">
        <div class="form">
            <div class="formBox">
                <label for="name">{{telLabel}}</label>
                <div class="inputBox">
                    <input type="text" value="" v-model="tel" placeholder='请输入用户名'>
                </div>
            </div>

            <div class="formBox">
                <label for="name">{{pswLabel}}</label>
                <div class="inputBox">
                    <input type="password" value="" v-model="psw" placeholder='请输入密码'>
                </div>
            </div>

            <div class="formBox">
                <div class="buttonBox">
                    <button type="button" v-on:click="loginForm">{{btn}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return  {
                tel: '',
                psw: '',
                telLabel: '用户名',
                pswLabel: '密码',
                tels: '请输入用户名',
                psws: '请输入密码',
                btn: '登录'
            }
        },
        mounted: function () {
            this.load();
        },
        methods: {
            load () {
                this.resize();
            },
            loginForm () {
                let data = {
                    tel: this.tel, psw: this.psw
                };
                console.log(data);
            },
            resize () {
                let HH = document.getElementsByTagName('html')[0].clientHeight;
                let HW = document.getElementsByTagName('html')[0].clientWidth;
                document.getElementById('login').style.top = (HH-HW/1366*100*4)/2+'px';
                document.getElementById('login').style.left = (HW-HW/1366*100*5)/2+'px';
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../styles/form.less';
    .login{
        width: 5rem;
        height: 4rem;
        margin: 0 auto;
        position: fixed;

        .form{
            border: 1px solid black;
            border-radius: 0.05rem;
        }

        .formBox{
            width: 4rem;

            input {
                width: 3rem;
                padding: 0 0.15rem
            }
        }
    }
</style>