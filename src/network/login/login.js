import {request} from '../request'

export function login(userInfo) {
    return request({
        url: '/private/v1/login',
        params: userInfo})
}