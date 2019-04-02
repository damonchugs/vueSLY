<template>
  <div class="mine">
    <!-- 顶部背景色 -->
    <div class="backRound"></div>

    <div class="contianer">
      <div class="info">
        <img class="headImg" :src="ImgUrl" alt>
        <p>八百万勇士wifi</p>

        <div class="tops">
          <router-link to="/mine/order">
            <a class="fa fa-reorder">我的订单</a>
          </router-link>
          <router-link to="/mine/history">
            <a class="fa fa-history">我的历史</a>
          </router-link>
          <router-link to="/mine/qrcode">
            <a class="fa fa-qrcode">我的二维码</a>
          </router-link>
        </div>
      </div>

      <div class="content">
        <div class="middle">
          <router-link to="/mine/member">
            <a class="fa fa-address-card">会员俱乐部</a>
          </router-link>
          <router-link to="/mine/level">
            <a class="fa fa-user-circle">我的等级</a>
          </router-link>
          <router-link to="/mine/address">
            <a class="fa fa-address-book">我的地址</a>
          </router-link>
        </div>

        <div class="footer">
          <router-link to="/mine/share">
            <a class="fa fa-share-alt-square">我的分享</a>
          </router-link>
          <router-link to="/mine/service">
            <a class="fa fa-server">客服与服务</a>
          </router-link>
          <router-link to="/mine/setting">
            <a class="fa fa-cog">设置</a>
          </router-link>
        </div>
      </div>
    </div>

    <transition :name="slides" :mode="modes">
        <router-view class="views"></router-view>
    </transition>
  </div>
</template>

<script>
import HW from "../../utils/utils.js";
import Backs from '../tips/backs.vue';

export default {
  name: "Mine",
  components: {
      Backs
  },
  data() {
    return {
      ImgUrl: require("../../assets/head.jpg"),
      slides: "slide-left",
      modes: "in-out",
      routerShow: 'false'
    };
  },
  methods: {
    beforeEnter: e => {
      console.log(HW);
    }
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      const toDepth = to.path.split("/");
      const fromDepth = from.path.split("/");
      this.slides = toDepth < fromDepth ? "slide-right" : "slide-left";
      this.routerShow = toDepth < fromDepth ? true: false;
    }
  }
};
</script>

<style lang="less" scoped>
.mine {
  font-size: 0.16rem;
  position: relative;

  .backRound {
    width: 100%;
    height: 50%;
    background: url("../../assets/head.jpg") no-repeat 0 0;
    background-size: 100% auto;
    opacity: 0.3;
    border-radius: 0 0 50% 50%;
  }

  .contianer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .info {
      width: 100%;
      text-align: center;
      margin-top: 1rem;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }

      p {
        font-weight: bold;
        font-size: 0.7rem;
        line-height: 1rem;
      }

      .tops {
        width: 80%;
        margin: 2.5rem auto 0rem auto;
        display: flex;
        justify-content: space-between;

        router-link {
          width: 1rem;
          height: 0.3rem;
          line-height: 0.3rem;
          text-align: center;
        }

        a.fa {
          color: black;
          font-size: 0.6rem;

          &::before {
            padding-right: 5px;
          }
        }
      }
    }

    .content {
      width: 90%;
      padding: 0.3rem 5% 2.3rem 5%;

      & > div:not(tops) {
        margin: 0.5rem 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background-color: rgba(255, 255, 255, 0.9);

        a {
          width: 100%;
          display: block;
          text-align: left;
          height: 1.5rem;
          line-height: 1.5rem;
          font-size: 0.5rem;
          text-decoration: none;
          color: black;

          &::before {
            padding: 5px;
          }
        }

        & > a {
          width: 95%;
          margin: 0 2.5%;
          border-bottom: 1px solid #ccc;
        }

        & > a:last-child {
          border-bottom: none;
        }
      }

      & > a:last-child {
        border-bottom: none;
      }
    }
  }

  .views{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 3;
  }
}
</style>



