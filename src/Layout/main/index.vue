<template>
  <div :style="{height:'100%',backgroundColor:'white',marginTop:'40px'  }">
    <transition :name="transitionName"
                mode="out-in">
      <keep-alive :include="keepAliveRouter"
                  v-if="refreshPage">
        <!-- 加key属性防止组件复用 -->
        <router-view :key="$route.fullPath">
        </router-view>
      </keep-alive>

    </transition>
  </div>
</template>

<script>
export default {
  created () {
    console.log('keepAliveMenus---', this.keepAliveRouter)
  },
  data () {
    return {
      transitionName: "fade-in",
      keepAliveRouter: this.$store.state.menus.keepAliveMenus
    };
  },
  computed: {
    //tab页刷新页面时，重新加载组件
    refreshPage () {
      return this.$store.state.tab.refreshPage
    },
  },
}
</script>

<style>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: transform 0.6s, opacity 0.6s ease-in-out;
}

.fade-in-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.fade-in-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>