<template>
  <div class="qrcode">
    <Backs :name="title"/>

    <div id="query">
      <h1>二维码：</h1>
      <canvas id="canvas"></canvas>
    </div>

    <button type="button" class="btn" v-on:click="getCode">点击生成二维码</button>
  </div>
</template>

<script>
import QRCode from "qrcode";
import Backs from "../tips/backs.vue";

export default {
  name: "Myqrcode",
  components: {
    Backs
  },
  data() {
    return {
      title: "二维码",
      QueryDetail: ''
    };
  },
  created() {},
  methods: {
    getCode() {
      this.QueryDetail = "俺看看是那两款车打蜡不能进来看1";

      var canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, this.QueryDetail, function(error) {
        if (error) console.error(error);
        console.log("success!",canvas);
      });
    }
  }
};
</script>

<style scoped lang="less">
.qrcode {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: white;

  #query {
    width: 100%;
    height: 60vh;

    #canvas {
      width: 80% !important;
      height: auto !important;
    }
  }
}
</style>