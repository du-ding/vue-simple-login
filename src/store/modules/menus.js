

const state = {
  count: 10,
  menus: [],
  isReloadMenus: true,
  accessRouters: [],
  keepAliveMenus: []
}
const mutations = {
  setMenus (state, menus) {
    state.menus = menus
  },
  cleanMenus (state) {
    state.menus = []
  },
  setIsReloadMenus (state, flag) {
    state.isReloadMenus = flag
  },
  setAccessRouters (state, accessRouters) {
    state.accessRouters = accessRouters
  },
  setKeepAliveMenus (state, flatRouters) {
    flatRouters.map((router) => {
      if (router.meta.keepAlive) {
        state.keepAliveMenus.push(router.name)
      }
    })
  }
}

const actions = {
  setMenus ({ commit }, accessRouters) {
    commit("setMenus", accessRouters)
  },
  cleanMenus ({ commit }) {
    commit("cleanMenus")
  },
  setIsReloadMenus ({ commit }, flag) {
    commit("setIsReloadMenus", flag)
  },
  setAccessRouters ({ commit }, accessRouters) {
    commit("setAccessRouters", accessRouters)
  },
  setKeepAliveMenus ({ commit }, flatRouters) {
    commit("setKeepAliveMenus", flatRouters)
  }
}
export default {
  state,
  mutations,
  actions
}
