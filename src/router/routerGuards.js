import store from "@/store";
import { authorityRouterApi } from '@/api/router.js'
import { getallRouters, errorPage } from './index'
import { filterRouter, getLevelMenu, flatRouter } from './utilRouters'

export default function routerGuards (router) {
  router.beforeEach((to, from, next) => {
    //刷新页面时，可以从session中获得user
    store.dispatch('setUser', JSON.parse(sessionStorage.getItem('user')))
    const user = store.state.user.user
    console.log('routeruser', user)
    if (to.name === 'login') { //如果是登录页，则跳过验证
      next()
      return
    }
    if (!user) { //未登录 next会等beforeEach函数都执行完再路由跳转 ，必须加return结束函数的执行
      next({ path: "/", query: { redirect: to.path, ...to.query } })
      return
    } else {//已登录
      if (store.state.menus.isReloadMenus) {
        //只会在用户刚登陆时执行一次，用于生成用户可访问的路由
        const allRouters = getallRouters()
        console.log('----', allRouters)
        //后端传递路由权限数组authorityArray
        authorityRouterApi({ id: Number(user.id) }).then((res) => {
          let authorityArray = res
          console.log(authorityArray)
          //可访问的路由
          let accessRouters = filterRouter(allRouters, authorityArray)
          console.log(accessRouters)
          // router.options.routes.push(...accessRouters);
          router.addRoutes(accessRouters)
          router.addRoutes(errorPage)//添加404
          store.dispatch('setAccessRouters', accessRouters)
          store.dispatch('setIsReloadMenus', false) //修改标识，路由变化后仅执行下面else的代码块
          //提取出accessRouters的children内对象，组成新的数组对象
          const flatRouters = flatRouter(accessRouters)
          //设置需要keep-alive的组件
          store.dispatch('setKeepAliveMenus', flatRouters)
          next(to) //加to让路由守卫执行两次，确保addRoutes的动态路由添加进路由表
          return
        })
      } else {
        console.log('accessRouters------', store.state.menus.accessRouters)
        //生成页面左侧菜单，根据level渲染菜单，同一个level的为一组菜单
        const menus = getLevelMenu(store.state.menus.accessRouters, to.meta.level)
        //设置侧边菜单menus
        store.dispatch('setMenus', menus)
        next()
        return
      }
    }
  })
}