<template>
  <div style="height:100%">
    <a-layout style="height:100%">
      <a-layout-header class="header">
        <Header />
      </a-layout-header>
      <a-layout>

        <a-layout-sider v-model="collapsed">
          <PageMenu v-model="collapsed" />
        </a-layout-sider>

        <a-layout-content :style="{ margin: '6px 16px'}">
          <Tab />
          <Main />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import PageMenu from './menu'
import Tab from './tab'
import Main from './main'
import Header from './header'
export default {
  components: {
    PageMenu,
    Tab,
    Main,
    Header
  },
  data () {
    return {
      collapsed: false,
    };
  },

};
</script>
<style scoped>
.ant-layout-header {
  background: #001529;
  position: absolute;
  width: 100%;
  z-index: 1001;
}
.ant-layout.ant-layout-has-sider {
  margin-top: 64px;
}
</style>