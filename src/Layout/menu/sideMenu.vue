<template functional>

  <a-sub-menu :key="props.subMenu.path">
    <span slot="title">
      <a-icon :type="props.subMenu.meta.icon" /><span>{{props.subMenu.meta.title}}</span>
    </span>
    <template v-for='s in props.subMenu.children'>
      <a-menu-item v-if="!s.children"
                   :key="s.path">
        <a-icon :type="s.meta.icon" />
        {{s.meta.title}}
      </a-menu-item>
      <sideMenu v-else
                :key="s.path"
                :subMenu="s" />
    </template>
  </a-sub-menu>

</template>

<script>
import sideMenu from './sideMenu.vue'
export default {
  name: 'SubMenu',
  isSubMenu: true,
  components: {
    sideMenu
  },
  props: {
    subMenu: {
      type: Object
    }
  },
}
</script>

<style>
</style>