import axios from 'axios'

const http = axios.create({
    timeout: 10000,
    baseURL: 'http://api.chennick.wang'
})


export default http