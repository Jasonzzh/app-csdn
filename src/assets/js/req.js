import axios from 'axios'

axios.defaults.timeout = 5000
const urlBase = 'http://www.zhangqinblog.com:8080/API/index.php?' // 线上环境
// const urlBase = 'http://localhost/newBlog/api/Jason_Blog/index.php?' // 本地环境

// get请求封装
const get = (url, params) => {    
    return new Promise((resolve, reject) =>{        
        axios.get(urlBase + url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
        })    
    })
}
// post请求封装
const post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(urlBase + url, JSON.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    })
}

export {
    get,
    post,
}
