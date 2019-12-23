import axios from 'axios'

const urlBase = 'http://www.zhangqinblog.com/api/Jason_Blog/index.php?'

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
