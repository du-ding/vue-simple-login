
/**
 * 第二组路由，产品管理相关，level都为1
 * @Author:duding
 */
export default {
  path: "/mould",
  name: 'mould',
  component: () => import("@/Layout/index.vue"),
  meta: {
    title: '零件管理',
    icon: 'pie-chart',
  },
  children: [
    {
      path: "/mould/A",
      name: "mouldA",
      meta: {
        authority: 'mouldA',
        title: 'A部分',
        icon: 'pie-chart',
        level: 1
      },
      component: () => import("@/views/product/detail/mould/A.vue"),
    },
    {
      path: "/mould/B",
      name: "mouldB",
      meta: {
        authority: 'mouldB',
        title: 'B部分',
        icon: 'pie-chart',
        level: 1
      },
      component: () => import("@/views/product/detail/mould/B.vue"),
    }
  ]
}