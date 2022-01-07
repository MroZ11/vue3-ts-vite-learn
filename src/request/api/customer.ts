import { AxiosResponse } from 'axios'
import {post}  from '../request'


/**
 * 行数据
 */
 export interface Customer {
    /**
     * id
     */
    id:string
    /**
     * 日期
     */
    date: string
    /**
     * 姓名
     */
    name: string
    /**
     * 地址
     */
    address: string
  }
  

export async function postCustomer (params:Customer): Promise<Customer>{
    let response = await post('/customer',params)
    return response.data.data

    // return post('/customer',params).then((response:any)=>{
    //    return response.data.data
    // }).catch(e=>{
    //     return Promise.reject(e)
    // })
}