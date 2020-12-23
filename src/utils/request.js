import axios from 'axios'
import { getItem, removeItem } from './index'
import routePaths from '@/router/routePath'

const fetchUrl = ''

let instanceAxios = axios.create({
    baseURL: fetchUrl,
    withCredentials: true
})

const getToken = () => {
    return getItem('token')
}

const removeToken = () => {
    removeItem('token')
    removeItem('userName')
    if (!window.location.href.includes(routePaths.login)) {
        window.location.href = routePaths.login
    }
}

const handleResponseEnum = {
    '510': removeItem
}

const headersConfig = (config) => {
    config.headers = {
        'Content-Type': 'application/json',
        token: getToken()
    }
}

const errorEnum = {
    'error': () => {
        if (!window.location.href.includes(routePaths.login)) {
            window.location.href = routePaths.serverError
        }
    }
}

instanceAxios.interceptors.request.use(
    config => headersConfig(config),
    error => Promise.reject(error)
)

instanceAxios.interceptors.response.use(res => handleResponseEnum(res), error => {
    errorEnum['error']()
    return Promise.reject(error)
})

export default instanceAxios