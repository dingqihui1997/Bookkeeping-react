import http from "./"

export default {
    getTopics() {
        return http.get('/topics')
    },
    login() {

    }
}