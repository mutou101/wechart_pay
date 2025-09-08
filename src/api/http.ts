
import axios from 'axios';

const instance = axios.create({
  baseURL: window.location.hostname === 'localhost' 
    ? 'http://175.24.128.73:50003/PayGateway/'
    : '/api/proxy/', 
  timeout: 10000,
  headers: {
    'AppId': '7364117434221961217',
  }
});

export default instance;
