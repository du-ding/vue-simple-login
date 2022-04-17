

const state = {
  user: {},
}
const mutations = {
  setUser (state, user) {
    state.user = user
  },
}

const actions = {
  setUser ({ commit }, user) {
    commit("setUser", user)
  },
}
export default {
  state,
  mutations,
  actions
}
