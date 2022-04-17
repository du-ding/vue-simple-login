
export const getUserInfo = () => {
  let userInfo = {
    "error_code": 0,
    "data": [{
      "id": '1',
      "usertitle": "管理员",
      "username": "admin",
      "password": "123456",
      "token": "111111",
    },
    {
      "id": '2',
      "usertitle": "用户1",
      "username": "user1",
      "password": "user1",
      "token": "222222",
    },
    {
      "id": '3',
      "usertitle": "用户2",
      "username": "user2",
      "password": "user2",
      "token": "333333",
    }
    ]
  }
  return userInfo
}
export default {
  url: 'user',
  type: 'get',
  fun: getUserInfo
}