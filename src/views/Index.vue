<template>
    <div class="bodys">
        <router-view class="container"></router-view>

        <div class="menus">
            <router-link to="/" class="home">首页</router-link>
            <router-link to="/mine" class="mine">我的</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index'
    }
</script>

<style lang="less" scoped>
    .bodys{
        width: 100%;
        height: 100%;
        font-size: 0.16rem;
        overflow-x: hidden;

        .container{
            width: 100%;
            height: calc(~"100% - 2rem");
        }

        .menus{
            width: 100%;
            height: 2rem;
            border-top: 1px solid #115173;
            display: flex;
            justify-content: space-between;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 2;
            background-color: white;

            .home, .mine{
                width: 40%;
                height: 90%;
                padding: 5% 5%;
                text-align: center;
                display: inline-block;
                font-size: 0.3rem;
                color: #233142;
                text-decoration: none;
            }

            .mine{
                border-left: 1px solid #f0ece2;
            }
        }
    }
</style>


