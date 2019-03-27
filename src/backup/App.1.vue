<template>
  <div id="app">
    <p>
      <router-link to="/user/123">user</router-link>
      <router-link to="/route">route</router-link>
      <span v-on:click="goToHello">goback</span>
    </p>
    <router-view />
    <router-view class="view two" name="a"></router-view>
  </div>
</template>

<script>
// import Login from './components/Login.vue'
// import Route from './components/route.vue'
// import Users from "./components/login/user";
export default {
  name: "app",
  methods: {
    goToHello () {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped>
  @import "./styles/style.less";

  #app {
    width: 100%;
    height: 100%;
    text-align: center;
    color: #2c3e50;
    font-size: 0.16rem;

    p {
      a,span {
        margin: 10px 0 0 10px;
      }
      span {
        cursor: pointer;
      }
    }
  }
</style>