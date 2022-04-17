<template>
  <div class="main">
    <a-tooltip>
      <a-icon type="fullscreen"
              class="fullScreen"
              style="font-size:16px;color:red;"
              @click='test' />
      <template slot="title">
        全屏
      </template>
    </a-tooltip>
    <dv-decoration-2 style="width:200px;height:5px;" />
    <dv-decoration-8 style="width:300px;height:50px;" />
    <div class="title">
      <span style="font-size:26px;color:white">可视化大屏</span>
      <dv-decoration-6 style="width:300px;height:20px;" />
    </div>

    <dv-decoration-8 :reverse="true"
                     style="width:300px;height:50px;" />
    <dv-decoration-2 style="width:200px;height:5px;" />
  </div>

</template>

<script>
import screenfull from "screenfull";
export default {
  methods: {
    test () {
      const element = document.getElementById('target');
      screenfull.request(element);
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 40px;
  width: 1300px;
  display: flex;
  margin: 0 auto;
  transform: translateX(-50px);
}
.title {
  text-align: center;
}
.fullScreen ::v-deep svg {
  width: 40px;
  height: 40px;
}
</style>