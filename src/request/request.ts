import axios from "axios"
let url = "/api"
const request = axios.create({
    baseURL: url,
    timeout: 50000
})

export function get(url: string, params: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        request.get(url, { params: params })
            .then(response => {
                return resolve(response)
            })
            .catch(error => {
                return reject(error)
            })

    })
}

export function post(url: string, params: Object): Promise<any> {
    return new Promise((resolve, reject) => {
        request.post(url, params)
            .then(response => {
                return resolve(response)
            })
            .catch(error => {
                return reject(error)
            })

    })
}