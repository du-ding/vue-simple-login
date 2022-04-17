/**
 * 首页路由
 * @Author:duding
 */
export default {
  path: "/home",
  name: 'home',
  component: () => import("@/Layout/index.vue"),
  redirect: '/home/index', //重定向到children
  children: [
    {
      path: "/home/index",
      name: "homeIndex",
      meta: {
        authority: 'home',
        title: '首页',
        icon: 'area-chart',
        level: 0,
        keepAlive: true
      },
      component: () => import("@/views/home/index.vue"),
    }
  ]
}