
import http from './http';

interface User {
  id: number;
  name: string;
  email: string;
}

export const login = (data: { username: string; password: string }) => 
  http.post<{ token: string }>('/auth/login', data);

export const pay = (params: {})=> {
    return http.post<{ token: string }>('/PayGateway/test/QrCodePay', params);
}
