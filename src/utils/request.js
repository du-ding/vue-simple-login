import axios from "axios";
// var axios = require("axios");
var request = axios.create({
  // baseURL: "/api",
});
request.interceptors.response.use((config) => {
  if (sessionStorage.getItem('token')) { //未登录 添加token
    // jwt token
    config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('token')
  }
  return config.data;
});
export default request;
