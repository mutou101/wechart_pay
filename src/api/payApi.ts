import http from './http';

export const pay = (params: {})=> {
    return http.post('unifiedorder', params);
}

export const encrypt = (encryptionKey: string, params: {})=> {
    return http.post(`test/sm4/gcm/encrypt?encryptionKey=${encryptionKey}`, params);
}


export const fetchData = () => http.get('/data');