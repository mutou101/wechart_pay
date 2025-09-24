
import axios from 'axios';

const instance = axios.create({
  baseURL: window.location.hostname === 'localhost' 
  ? 'http://175.24.128.73:50003/pay/'
  : '/api/proxy/', 
  timeout: 10000,
});

export default instance;
