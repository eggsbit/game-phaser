import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:8180/api/v1';

const responseBody = (res: AxiosResponse) => res.data;

const instance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})

const requests = {
    delete: (url: string) => instance.delete(`${url}`).then(responseBody),
    get: (url: string) => instance.get(`${url}`).then(responseBody),
    put: (url: string, body: object) => instance.put(`${url}`, body).then(responseBody),
    post: (url: string, body: object) => instance.post(`${url}`, body).then(responseBody),
};

export const Auth = {
    login: (data: any) => requests.post('/users/login', { user: { initData: data } }),
};

export const GameSettings = {
    getSettings: () => requests.get('/game/settings')
};
