<template>
  <div class="app-main">
    <div class="title">vue-simple-login</div>
    <a-dropdown>
      <a-menu slot="overlay">
        <a-menu-item @click='logout'
                     key="1">
          注销
        </a-menu-item>
      </a-menu>
      <a-button style="margin-left: 8px"> 您好11：{{user.usertitle}}
        <a-icon type="down" />
      </a-button>
    </a-dropdown>

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: this.$store.state.user.user
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('cleanMenus')//清空菜单栏
      this.$router.push({
        path: "/"
      })
      location.reload() //登出后必须reload页面，否则路由守卫时无法读取所有路由
    }
  }
}
</script>

<style scoped>
.app-main {
  display: flex;
  justify-content: right;
  line-height: 64px;
  align-items: center;
  height: 100%;
}
button,
button:hover {
  background-color: #001529;
  color: white;
  border: #001529;
}
.title {
  text-align: center;
  flex: 2;
  font-size: 32px;
  color: rgb(0, 137, 255);
}
</style>