import axios from 'axios'

export default function ajax(url,params={},type='GET'){

    //1.变量
    let promise
    //2.返回一个Promise对象
    return new Promise((resolve,reject)=>{
        //2.1判断接收类型
        if(type.toUpperCase()==='GET'){
            //2.2 拼接字符串
            let paramsStr=''
            //2.3遍历
            Object.keys(params).forEach(key=>{
                paramsStr+=key+'='+paramsStr[key]+'&'
            })
            //2.4拼接完整的url地址
            url+='?'+paramsStr
            //2.5发送axios请求
            promise=axios.get(url)
        }else if(type.toUpperCase()==='POST'){
            //2.6 发送post请求
            promise=axios.post(url,params)
        }
        promise.then(response=>resolve(response.data))
        .catch(error=>reject(error))
    })
}