import request from "@/utils/request.js"

//mock模拟请求，根据项目需求更改api
function loginApi (data) {
  return request({
    url: '/login',
    method: 'get',
    data
  })
}
export {
  loginApi
}