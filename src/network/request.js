import axios from 'axios'

export function request(config) {
  //创建实例
  const instance=axios.create({
    baseURL: 'http://timemeetyou.com:8889/api',
    timeout: 5000
  })



  //axios的拦截器
  instance.interceptors.request.use(config=>{
    //1.config中一些信息不符合服务器的要求
    //2.开发一个loading组件，每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.某些网路请求(比如：登录(token)，必须携带一些特殊的信息)
    return config
  },err=>{
    // console.log(err);
  })

  // instance.interceptors.response.use(res=>{
  //   return res.data;
  // },err=>{
  //   console.log(err);
  // })

  return instance(config)
}
