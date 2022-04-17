
/**
 * 第二组路由，产品管理相关，level都为1
 * @Author:duding
 */
export default {
  path: "/productDetail",
  name: 'productDetail',
  component: () => import("@/Layout/index.vue"),
  redirect: 'productDetail/index', //重定向到children
  children: [
    {
      path: "/productDetail/index",
      name: "productDetailIndex",
      meta: {
        authority: 'productDetailIndex',
        title: '产品概况',
        icon: 'pie-chart',
        level: 1
      },
      component: () => import("@/views/product/detail/index.vue"),
    }
  ]
}