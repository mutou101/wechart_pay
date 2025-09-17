
import axios from 'axios';

// https://localhost:44304/
// http://175.24.128.73:50003/pay/
const instance = axios.create({
  baseURL: window.location.hostname === 'localhost' 
  ? 'http://175.24.128.73:50003/pay/'
  : '/api/proxy/', 
  timeout: 10000,
  headers: {
    'AppId': '7364117434221961217',
  }
});

export default instance;
