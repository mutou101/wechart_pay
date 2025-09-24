import http from './http';

export const pay = (params: {})=> {
    return http.post('unifiedorder', params);
}

export const close = (params: {})=> {
    return http.post('close', params);
}

export const refund = (params: {})=> {
    return http.post('unifierefund', params);
}

export const find = (params: {})=> {
    return http.post('out-trade-no', params);
}

export const encrypt = (encryptionKey: string, params: {})=> {
    return http.post(`test/sm4/gcm/encrypt?encryptionKey=${encryptionKey}`, params);
}


export const fetchData = () => http.get('/data');