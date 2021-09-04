import axios from 'axios'
import { Toast, } from 'zarm';
const http = axios.create({
    timeout: 10000,
    baseURL: 'http://api.chennick.wang'
})

http.interceptors.response.use((res: any) => {
    return res.data
}, (err: any) => {
    const status: number = err.response! && err.response.status
    if (status === 403) {
        Toast.show('没有全选')
    }
    if (status === 404) {
        Toast.show('路径错误')
    }
    if (status === 500) {
        Toast.show('服务器错误')
    }
    if (status === 503) {
        Toast.show('服务器维护')
    }
    return Promise.reject(err)
})

export default http