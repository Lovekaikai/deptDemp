import axios from 'axios'
import qs from 'qs'
import weui from 'weui'

axios.interceptors.request.use(function (res) {
  // Do something before request is sent
  console.log(res)
  if (res.method === 'post' && !(res.data instanceof FormData)) {
    res.data = qs.stringify(res.data)
  }
  return res
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  if (Number(response.errcode) !== 0) {
    if (Number(response.errcode) === -90004) { // 重新登录
    //   let url = encodeURIComponent(location.href)
    //   let rUrl = response.url
    //   let appid = util.getQueryString('appid')
    //   let corpurl = util.getQueryString('corpurl')
    //   let corpid = util.getQueryString('corpid')
    //   rUrl = rUrl + '&corpid=' + corpid + '&corpurl=' + corpurl + '&appid=' + appid
    //   console.warn(rUrl + '&redirect=' + url)
    //   location.replace(rUrl + '&redirect=' + url) //重定向
    } else if (response.errmsg) {
      /* eslint-disable no-undef */
      weui.alert(response.errmsg)
    } else {
    //   console.log(response)
    //   weui.alert(response)
    }
  }
  console.log(response)
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default axios
