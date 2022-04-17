import { message } from 'ant-design-vue';
const state = {
  tabsList: [{
    fullPath: "/home/index",
    query: {},
    params: {},
    path: "/home/index",
    name: "homeIndex",
    meta: {
      authority: 'home',
      title: '首页'
    },
  }],
  refreshPage: true,
}
const mutations = {
  initTabList () {
    let jsonArray = JSON.parse(sessionStorage.getItem('tab'))
    if (jsonArray) {
      for (let i = 0; i < jsonArray.length; i++) {
        jsonArray[i] = JSON.parse(jsonArray[i])
      }
      console.log('jsonArray----', jsonArray)
      state.tabsList = jsonArray
    }
  },
  setTabList (state, router) {
    var flag = false
    state.tabsList.map(tab => {
      if (tab.fullPath === router.fullPath) {
        flag = true
      }
    })
    if (!flag) {
      state.tabsList.push(router)
    }
  },
  deleteTabList (state, router) {
    state.tabsList = state.tabsList.filter(tab => {
      if (tab.fullPath === router.fullPath) {
        console.log(tab.fullPath, router.fullPath)
        return false
      } else {
        return true
      }
    })
    //所有tab都删除的时候展示首页
    if (state.tabsList.length === 0) {
      state.tabsList.push({
        fullPath: "/home/index",
        query: {},
        params: {},
        path: "/home/index",
        name: "homeIndex",
        meta: {
          authority: 'home',
          title: '首页'
        },
      })
    }
  },
  //刷新tab右键刷新page
  refreshPage (state) {
    state.refreshPage = false;
    setTimeout(() => {
      message.success('已刷新')
      state.refreshPage = true;
    }, 0)
  },
  //关闭其他tab
  closeOthers (state, router) { //router:保留的路由
    state.tabsList = state.tabsList.filter(tab => {
      if (tab.fullPath === router.fullPath) {
        return true;
      } else {
        return false;
      }
    })
  },
  //关闭所有tab
  closeAll (state,) {
    state.tabsList = []
    state.tabsList.push({
      fullPath: "/home/index",
      query: {},
      params: {},
      path: "/home/index",
      name: "homeIndex",
      meta: {
        authority: 'home',
        title: '首页'
      },
    })
  }
}

const actions = {
  setTabList ({ commit }, router) {
    commit("setTabList", router)
  },
  deleteTabList ({ commit }, router) {
    commit("deleteTabList", router)
  },
  refreshPage ({ commit }) {
    commit("refreshPage")
  },
  closeOthers ({ commit }, router) {
    commit("closeOthers", router)
  },
  closeAll ({ commit }, router) {
    commit("closeAll", router)
  },
  initTabList ({ commit }) {
    commit("initTabList")
  }
}
export default {
  state,
  mutations,
  actions
}
