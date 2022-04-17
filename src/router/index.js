import Vue from "vue";
import VueRouter from "vue-router";
import routerGuards from './routerGuards'
import * as _ from 'lodash'
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err);
};


const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
]
export const errorPage = [{
  path: '*',
  component: () => import("@/Layout/index.vue"),
  name: 'error',
  children: [{
    path: '*',
    name: 'errorPage',
    meta: {
      title: '404'
    },
    component: () => import("@/Layout/error/index.vue"),
  }
  ]
}]
const router = new VueRouter({
  mode: "hash",
  base: "/",
  routes,
});
//加载所有需要验证权限的路由

export function getallRouters () {
  const modulesFiles = require.context('./modules', true, /\.js$/)
  const allRouters = modulesFiles.keys().reduce((modules, modulePath) => {
    const value = modulesFiles(modulePath)
    modules.push(_.cloneDeep(value.default))  //深拷贝对象之后加入modules数组，否则allRouters[0] === allRouters[0]，allRouters对象数组中的对象一样
    return modules
  }, [])
  return allRouters
}




//设置路由守卫
routerGuards(router)

export default router;
