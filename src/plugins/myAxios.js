import axios from 'axios';

const myAxios = axios.create({
    // 弄一个共同的请求头
    baseURL: 'http://localhost:8080/api',
});

// 添加请求拦截器
// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("请求发送了",config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log("请求收到了",response);
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default myAxios;