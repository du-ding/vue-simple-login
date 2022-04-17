
import authority from '../dataBase/authority.json'

//模拟后端接口返回，返回结果及查询条件写的死，根据路由的children权限进行校验
export const authorityRouter = (request) => {
  request.body = JSON.parse(request.body)
  let authorityRouter
  if (request.body.id === 1) { //admin
    authorityRouter = authority.admin
  } else if (request.body.id === 2) { //user1
    authorityRouter = localStorage.getItem('user1Authority') ? localStorage.getItem('user1Authority').split(',') : authority.user1
  }
  else {
    authorityRouter = localStorage.getItem('user2Authority') ? localStorage.getItem('user2Authority').split(',') : authority.user2
  }
  return authorityRouter
}

export default {
  url: 'authorityRouter',
  type: 'get',
  fun: authorityRouter
}