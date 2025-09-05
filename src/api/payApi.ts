import http from './http';

export const pay = (params: {})=> {
    return http.post('/PayGateway/test/QrCodePay', params, { responseType: 'blob' });
}
