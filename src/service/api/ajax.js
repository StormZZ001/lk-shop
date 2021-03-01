import axios from 'axios'

export default function ajax(url='',params={},type='GET'){
    //1.变量
    let promise
    //2.返回一个promise对象
    return new Promise((resolve,reject)=>{
        if (type.toLowerCase() === 'GET') {
            //2.1拼接字符串
            let paramsStr=''
            //2.2遍历
            Object.keys(params).forEach(key=>{
                paramsStr+=key+'='+params[key]+'&'
            })
            //2.4拼接完整的字符串
            if (paramsStr) {
                url+='?'+paramsStr
            }
            //2.5发送axios请求
            promise=axios.get(url,params)
        }else if (type.toLowerCase() === 'POST') { //post请求
            promise=axios.post(url,params)
        }
        promise.then(response=>resolve(response.data))
        .catch(err=>reject(err))
    })
}