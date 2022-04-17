import request from "@/utils/request.js"

//mock模拟请求，根据项目需求更改api
function authorityRouterApi (data) {
  return request({
    url: '/authorityRouter',
    method: 'get',
    data
  })
}
export {
  authorityRouterApi
}