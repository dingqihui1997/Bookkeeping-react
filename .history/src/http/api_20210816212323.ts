import http from "./"

export default {
    getTopics() {
        return http.get('/topics')
    },
    // 注册
    register({ username, password }: { username: string, password: string }) {
        return http.post('/api/user/register', { username, password })
    },
    // 登录
    login({ username, password }: { username: string, password: string }) {
        return http.post('/api/user/login', { username, password })
    },
    // 获取用户信息
    get_userinfo() {
        return http.get('/api/user/get_userinfo')
    }
}