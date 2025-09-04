
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://175.24.128.73:50003', // 匹配代理路径
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'AppId': 7364117434221961217
  }
});

// 请求拦截器
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default instance;
