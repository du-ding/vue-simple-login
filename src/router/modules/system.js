export default
  {
    path: "/system",
    component: () => import("@/Layout/index.vue"),
    //对于有多个children的路由，不需要设置meta，校验权限时会根据children的meta校验。
    meta: {
      title: '系统管理',
      icon: 'setting',
    },
    children: [
      {
        path: "/system/authority",
        name: "authority",
        meta: {
          authority: 'authority',
          title: '权限管理',
          icon: 'deployment-unit',
          level: 0
        },
        component: () => import("@/views/system/authority/index.vue"),
      },
      {
        path: "/system/user",
        name: "user",
        meta: {
          authority: 'user',
          title: '用户管理',
          icon: 'user',
          level: 0
        },
        component: () => import("@/views/system/user/index.vue"),
      },
      {
        path: "/system/role",
        name: "role",
        meta: {
          authority: 'role',
          title: '角色管理',
          icon: 'smile',
          level: 0,
        },
        component: () => import("@/views/system/role/index.vue"),
      },

      {
        path: "/system/params",
        name: "params",
        meta: {
          authority: 'params',
          title: '参数管理',
          icon: 'pie-chart',
          level: 0
        },
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/system/job",
        name: "job",
        meta: {
          title: '岗位管理',
          icon: 'heat-map',
        },
        component: () => import("@/views/system/job/index.vue"), //对于三级路由，必须加一个父组件
        children: [
          {
            path: '/system/job/job1',
            name: "job1",
            meta: {
              authority: 'job1',
              title: '岗位1管理',
              icon: 'pie-chart',
              level: 0
            },
            component: () => import("@/views/system/job/job1.vue"),
          },
          {
            path: '/system/job/job2',
            name: "job2",
            meta: {
              authority: 'job2',
              title: '岗位2管理',
              icon: 'pie-chart',
              level: 0
            },
            component: () => import("@/views/system/job/job2.vue"),
          }
        ],
      }
    ]
  }
