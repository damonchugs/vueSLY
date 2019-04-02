<template>
  <div id="app">
    <Index  v-if="isShow" />
    <Login v-else />
  </div>
</template>

<script>
import Index from './views/Index.vue'
import Login from './views/login/login.vue'

export default {
  name: "app",
  components: {
    Index,
    Login
  },
  data () {
    return {
      isShow: true,
    }
  },
  watch: {
      '$route' (to, from, next) {
          let uid = this.$store.state.userid;
          if(uid == 0){
            this.isShow = false;
          } else {
            this.isShow = true;
          }
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
  }
</style>