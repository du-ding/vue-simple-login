import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//根据文件夹目录，自动生成modules，不用手动导入各个模块
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const store = new Vuex.Store({
  modules,
})
export default store;
