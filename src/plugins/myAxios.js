import axios from 'axios';

const myAxios = axios.create({
    // 弄一个共同的请求头
    baseURL: 'http://localhost:8080/api',
});

// 用于指示是否应该在跨域请求中包含凭据（例如，发送身份验证凭证，如 cookies 或 HTTP 认证）。
// 后端也要改 domain
myAxios.defaults.withCredentials = true;

// 添加请求拦截器
// Add a request interceptor
// 这是一个全局的请求拦截器 每次给后端发送请求前执行
myAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("请求发送了",config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
// 全局相应拦截器 每次接受到后端返回后 先执行这个
myAxios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log("请求收到了",response);

    // 如果收到的reponse.data.code 是40101 说明当前没有登陆
    // 强制跳转到登录页面
    if(response?.data?.code === 40101) {
      // todo 为什么会有一个#号
      window.location.href = '/#/login' 
    }
    return response.data;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default myAxios;