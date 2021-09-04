import http from "./"

export default {
    getTopics() {
        return http.get('/topics')
    },
    // 注册
    register({ username, pasword }: { username: string, pasword: string }) {
        return http.post('/api/user/register', username, pasword)
    }
}