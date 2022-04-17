
import * as _ from 'lodash'
/**
 * 提取出参数的children内对象，组成新的数组对象
 * @param {*} routers 
 * @returns 
 */
export function flatRouter (routers) {
  let result = []
  function flat (routers) {
    routers.forEach((router) => {
      if (Object.prototype.hasOwnProperty.call(router, 'children')) {
        flat(router.children)
      } else {
        result.push(router)
      }
    })
  }
  flat(routers)
  return result
}


/**
 * 根据权限数组，过滤所有的路由，生成可访问的路由对象数组
 * @param {*} routers 
 * @returns 
 */
export function filterRouter (allRouters, authorityArray) {
  return allRouters.filter((router) => {
    if (!Object.prototype.hasOwnProperty.call(router, 'children')) { //叶子路由
      for (let i = 0; i < authorityArray.length; i++) {
        if (router.meta.authority === authorityArray[i]) {
          return true
        }
      }
    }

    else if (router.children.length === 1) { //该路由没有需要展开的子项
      for (let i = 0; i < authorityArray.length; i++) {
        if (router.children[0].meta.authority === authorityArray[i]) {
          return true
        }
      }
    }

    else {
      router.children = filterRouter(router.children, authorityArray)
      if (router.children.length === 0) {
        return false
      } else {
        return true
      }
    }
  })
}

/**
 * 对所有路由allRouters，按照level拆分
 * @param {*} routers 
 * @returns 
 */

/**
 * 生成当前页面左侧菜单栏
 * @param {*} routers 
 * @returns 
 */
export function getLevelMenu (accessRouters, level) {
  const flatRouters = flatRouter(accessRouters)//把路由的对象数组中的children抽到一层生成新的路由数组，用于确定有多少个菜单组合
  const MAXLEVEL = Math.max.apply(Math, flatRouters.map(item => { return item.meta.level })) //动态路由菜单组合的个数
  if (MAXLEVEL === 0) { //已登录用户可访问的路由只有一层菜单，不会出现动态菜单的情况
    return accessRouters
  }
  let result = {}

  for (let i = 0; i < MAXLEVEL + 1; i++) {
    result[i] = breakAllRouters(_.cloneDeep(accessRouters), i)
  }
  return result[level]
}
/**
 * 按照level拆分allRouters
 * @param {*} routers 
 * @returns 
 */
function breakAllRouters (accessRouters, i) {
  return accessRouters.filter((router) => {
    if (!Object.prototype.hasOwnProperty.call(router, 'children')) {//叶子路由
      if (router.meta.level == i) {
        return true
      }
      else { return false }
    }
    else if (router.children.length === 1) { //该路由没有需要展开的子项
      if (router.children[0].meta.level == i) {
        return true
      }
      else {
        return false
      }
    } else {
      router.children = breakAllRouters(router.children, i)
      if (router.children.length === 0) {
        return false
      } else {
        return true
      }
    }
  })
}