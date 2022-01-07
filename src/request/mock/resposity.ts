import Mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

export default [
    {
        url: "/api/resposity",
        method: "get",
        response: ({ query }:{query:Record<string,any>}) => {
            let goods = '@cname(2, 3)'
            if(query.key!=null&&query.key!=''){
                goods = query.key+'@clast(1,2)'
            }
            var data = Mock.mock({
                // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                'list|1-10': [{
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'userId': '1',
                    'goods': goods,
                    'count': '@integer(1, 100)',
                }]
            })
            return {
                code: 200,
                message: "ok",
                data: data.list 
            };
        }
    },
    {
        url: "/api/customer",
        method: "post",
        response: ({ body }:{body:Record<string,any>}) => {
            console.log(body)
            return {
                code: 200,
                message: "ok",
                data:body
            };
        }
    }
] as MockMethod []
