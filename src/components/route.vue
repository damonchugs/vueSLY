<template>
  <div class="router">
    <p>
      <router-link to="/route/foo">Go to Foo</router-link>
      <router-link to="/route/bar">Go to Bar</router-link>
    </p>

    
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Route",
  data () {
    return {
      transitionName: 'slide'
    }
  },
  computed: {
    username() {
      return this.$route.params.username;
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/')[2][0]
      const fromDepth = from.path.split('/')[2][0]
      console.log(toDepth, fromDepth, from.path.split('/'));
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
.router {
  font-size: 0.16rem;
  padding-top: 1rem;

  > div {
    margin-top: 10px;
  }

  p {
    a {
      margin: 10px 0 0 10px;
    }
  }
}
</style>