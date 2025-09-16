import http from './http';

export const pay = (params: {})=> {
    return http.post('pay/test/QrCodePay', params, { responseType: 'blob' });
}


export const fetchData = () => http.get('/data');