<template>
  <div :class="{appMainActive:true}"
       ref="app">
    <a-dropdown :trigger="['contextmenu']"
                v-for="tab in tabsList"
                :key=" tab.fullPath">
      <div class="tabs"
           :class="{'isActive':$route.fullPath === tab.fullPath}"
           @click="selectTab(tab)">
        <span>{{tab.meta.title}}
          <a-icon type="close"
                  style='color:rgb(217 217 217)'
                  @click.stop="closeTab(tab)"
                  v-if="tab.meta.title!='首页'" />
        </span>
      </div>
      <a-menu slot="overlay">
        <a-menu-item key="1"
                     @click='refreshPage()'>
          刷新当前
        </a-menu-item>
        <a-menu-item key="2"
                     @click='closeOthers(tab)'>
          关闭其他
        </a-menu-item>
        <a-menu-item key="3"
                     @click='closeAll()'>
          关闭全部
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import dragula from "dragula"
export default {
  mounted () {
    //初始化菜单列表
    this.$store.dispatch('initTabList')
    //初始化拖拽
    dragula([this.$refs.app], {
      direction: 'horizontal'
    });
    //监听刷新浏览器，将已打开的tabs存入vuex
    window.addEventListener('beforeunload', () => {
      let tab = []
      for (let i = 0; i < this.tabsList.length; i++) {
        tab[i] = {
          path: this.tabsList[i].path,
          query: this.tabsList[i].query,
          params: this.tabsList[i].params,
          meta: this.tabsList[i].meta,
          name: this.tabsList[i].name,
          fullPath: this.tabsList[i].fullPath
        }
        tab[i] = JSON.stringify(tab[i])
      }
      sessionStorage.setItem('tab', JSON.stringify(tab))
    });
    //tab与滑轮交互
    window.addEventListener("wheel", this.wheel);
  },
  computed: {
    //tab页刷新页面时，重新加载组件
    tabsList () {
      return this.$store.state.tab.tabsList
    }
  },
  watch: {
    '$route.fullPath': {
      immediate: true,
      handler () {
        this.$store.dispatch('setTabList', this.$route)
      }
    }
  },
  methods: {
    selectTab (tab) {
      this.$router.push({
        path: tab.fullPath,
        query: tab.query,
        params: tab.params
      })
    },
    closeTab (tab) {
      this.$store.dispatch('deleteTabList', tab)
      this.selectTab(this.tabsList[this.tabsList.length - 1])
    },
    //刷新当前页
    refreshPage () {
      this.$store.dispatch('refreshPage')
    },
    //关闭其他页
    closeOthers (tab) {
      this.$store.dispatch('closeOthers', tab)
      this.$router.push({
        path: tab.fullPath,
        query: tab.query,
        params: tab.params
      })
    },
    closeAll () {
      this.$store.dispatch('closeAll')
      this.selectTab(this.tabsList[this.tabsList.length - 1])
    },
    wheel (event) {
      //或mousewheel。但是他们都不兼容 firefox
      if (this.$refs.app.style) {
        if (event.wheelDelta > 0) {
          this.$refs.app.style.transform =
            "translateY(0px)";
        } else {
          this.$refs.app.style.transform =
            "translateY(-3.5rem)";
        }
      }

    }
  }
}
</script>

<style scoped>
.appMainActive {
  display: flex;
  position: absolute;
  width: 1671px;
  background-color: #f0f2f5;
  z-index: 1000;
  padding-bottom: 5px;
  transition: all 1s;
}
.tabs {
  height: 32px;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
  text-align: center;
  line-height: 32px;
}
.isActive {
  background-color: #001529;
  color: white;
}
.tabs:hover,
.isActive:hover {
  cursor: pointer;
}
i.isActive:hover {
  color: white !important;
}
i.anticon:hover {
  color: #001529;
}
.test {
  width: 50px;
  height: 50px;
  background-color: red;
  margin: 5px;
}
</style>