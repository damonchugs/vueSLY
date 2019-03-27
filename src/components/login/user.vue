<template>
  <div class="user">
    <p>
      <router-link to="/user/123">go user</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'Users',
        watch: {
            $route(to, from) {
                // 对路由变化作出响应...
                // console.log(this.$route);
            }
        },
        computed: {
            username() {
                return this.$route.params.username;
            }
        },
        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
            }
        }
    }
</script>

<style lang="less" scoped>
.user {
  font-size: 0.16rem;
}
</style>