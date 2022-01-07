import { AxiosResponse } from 'axios'
import {get}  from '../request'

export interface Resposity{
    userId:string
    goods:string
    count:number
}

export async function getResposity (params:Object): Promise<Resposity[]>{
    return get('/resposity',params).then((response:any)=>{
        return response.data.data
    }).catch(err=>{
        return []
    })
}