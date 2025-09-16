
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://175.24.128.73:50003/', 
  timeout: 10000,
  headers: {
    'AppId': '7364117434221961217',
  }
});

export default instance;
