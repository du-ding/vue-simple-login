
<template>
  <div class="app-main">
    <a-button style="margin-bottom: 16px"
              @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu :default-open-keys="defaultOpenKeys"
            :selectedKeys="selectedKeys"
            @select='selectMenu'
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed">
      <template>
        <a-menu-item :key="menu.children[0].path"
                     v-for='menu in menus'>
          <a-icon :type="menu.children[0].meta.icon" />
          <span>{{menu.children[0].meta.title}}</span>
        </a-menu-item>
        <sideMenu v-for="subMenu in subMenus"
                  :key="subMenu.path"
                  :subMenu='subMenu' />
      </template>
    </a-menu>
  </div>
</template>

<script>
import sideMenu from './sideMenu.vue'
export default {
  props: ['value'],
  components: {
    sideMenu
  },
  data () {
    let collapsedCopy = this.value
    return {
      collapsed: collapsedCopy,
      accessRouters: [],//所有可访问菜单
      menus: [],//只有一层的菜单
      subMenus: [],//有二层菜单
      defaultOpenKeys: [],//默认展开的菜单
      selectedKeys: [],//选中的菜单
    };
  },
  watch: {
    '$route.fullPath': {
      immediate: true,
      handler () {
        this.selectedKeys = [this.$route.path]
      }
    },
    '$store.state.menus.menus': {
      immediate: true,
      handler () {
        console.log('menus变化了')
        this.selectedKeys = [this.$route.path]
        this.menus = []
        this.subMenus = []
        this.accessRouters = this.$store.state.menus.menus
        console.log('accessRouters--', this.accessRouters)
        //将所有菜单拆分成两个菜单数组，方便循环===>一级菜单，二级菜单
        this.accessRouters.map(item => {
          if (item.children.length === 1) {
            this.menus.push(item)
          } else {
            this.subMenus.push(item)
          }
        })
        //初始化展开的菜单数组
        this.defaultOpen(this.subMenus)
      }
    }
  },
  methods: {
    selectMenu (params) {
      console.log(params)
      this.$router.push({
        path: params.key
      })
    },
    toggleCollapsed () {
      this.collapsed = !this.collapsed;
      this.$emit('input', this.collapsed)
    },
    defaultOpen (subMenus) {
      subMenus.map(subMenu => {
        this.defaultOpenKeys.push(subMenu.path)
        if (subMenu.children) {
          this.defaultOpen(subMenu.children)
        }
      })
    },
  },
};
</script>
<style scoped>
.ant-menu-dark,
.ant-menu-dark .ant-menu-sub {
  color: rgba(255, 255, 255, 0.65);
  background: #001529;
}
/* //#0a0933 */
::v-deep .ant-menu-dark .ant-menu-inline.ant-menu-sub {
  background: #001529;
  box-shadow: 0 0 18px rgb(0 0 0 / 100%) inset;
}
.ant-btn {
  margin-bottom: 16px;
  background-color: #001529;
  border: 0;
  padding: 0;
  margin-left: 70%;
}
i {
  color: white;
  font-size: 20px;
}
</style>