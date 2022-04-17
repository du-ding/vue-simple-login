export const login = (request) => {
  request.body = JSON.parse(request.body)
  let result
  if (request.body.userName === 'admin' && request.body.password === 'admin') {
    result = {
      code: 200,
      id: '1',
      usertitle: "管理员",
      userName: "admin",
      password: "admin",
      token: "111111",
    }
  } else if (request.body.userName === 'user1' && request.body.password === 'user1') {
    result = {
      code: 200,
      id: '2',
      usertitle: "用户1",
      username: "user1",
      password: "user1",
      token: "222222",
    }
  } else if (request.body.userName === 'user2' && request.body.password === 'user2') {
    result = {
      code: 200,
      id: '3',
      usertitle: "用户2",
      username: "user2",
      password: "user2",
      token: "333333",
    }
  }
  else {
    result = {
      code: 401,
      message: '用户名或密码错误'
    }
  }
  return result
}
export default {
  url: 'login',
  type: 'get',
  fun: login
}