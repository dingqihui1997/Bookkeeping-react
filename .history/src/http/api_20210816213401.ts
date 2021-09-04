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
    },
    // 修改个性签名
    edit_signature({ signature, avatar }: { signature: string, avatar: string }) {
        return http.post('/api/user/edit_signature', { signature, avatar })
    },
    // 上传接口 
    upload({ files }: { files: string }) {
        return http.post('/api/upload', { files })
    },
    // 修改用户密码
    modify_pass({ old_pass, new_pass, new_pasa2 }: { old_pass: string, new_pass: string, new_pasa2: string }) {
        return http.post('/api/user/modify_pass', { old_pass, new_pass, new_pasa2 })
    },
    // 消费类型
    consumption() {
        return http.get('/api/type/list')
    },
    // 账单列表 type_id,类型id不传默认获取所有
    bill({ date, page, page_size, type_id }: { date: string, page: number, page_size: number, type_id: string }) {
        return http.get(`/api/bill/list?date=${date}&page=${page}&page_size=${page_size}&type_id=${type_id}`)
    }
}
