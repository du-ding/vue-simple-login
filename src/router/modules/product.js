
/**
 * 首页路由
 * @Author:duding
 */
export default {
  path: "/product",
  name: 'product',
  component: () => import("@/Layout/index.vue"),
  redirect: 'product/index', //重定向到children
  children: [
    {
      path: "/product/index",
      name: "productIndex",
      meta: {
        authority: 'product',
        title: '产品管理',
        icon: 'sketch',
        level: 0
      },
      component: () => import("@/views/product/index.vue"),
    }
  ]
}