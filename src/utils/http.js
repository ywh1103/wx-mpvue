// import wx from 'wx';//引用微信小程序wx对象
// import { bmobConfig } from '../config/bmob';//bmob配置文件

const Http = {
    get(url, data, header) {
      wx.showLoading({
        title: '加载中',//数据请求前loading，提高用户体验
      })
      let reqHeader={
        // 'X-Bmob-Application-Id': bmobConfig.applicationId,
        // 'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
        'Content-Type': 'application/json'
      }
      if(header){
        reqHeader.token = header.token;
      }
      return new Promise((resolve, reject) => {
        wx.request({
          url: url,
          data: data,
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: reqHeader, // 设置请求的 header
          success: function (res) {
            // success
            wx.hideLoading();
            if(res.statusCode!=200){
              wx.showToast({
                title: "网络出错，稍后再试",
                icon: "none"
              });
              return false;
            }
            if(res.data.code == 0){
              resolve(res.data);
            }else{
              let errorMsg = res.data.errMsg || res.data.errorMsg;
              wx.showToast(
                {
                    title:errorMsg,
                    icon:'none'
                }
              )
            }
          },
          fail: function (error) {
            // fail
            wx.hideLoading();
            reject(error);//请求失败
          },
          complete: function () {
            wx.hideLoading();
            // complete
          }
        })
      })
    },
    post(url, data, header) {
      wx.showLoading({
        title: '加载中',
      })
      let reqHeader={
        // 'X-Bmob-Application-Id': bmobConfig.applicationId,
        // 'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
        'Content-Type': 'application/json'
      }
      if(header){
        reqHeader.token = header.token;
      }
      return new Promise((resolve, reject) => {
        wx.request({
          url: url,
          data: data,
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: reqHeader, // 设置请求的 header
          success: function (res) {
            // success
            wx.hideLoading();
            console.log(res);
            setTimeout(() => {
              if(res.data.code == 0){
                resolve(res.data);
              }else{
                let errorMsg = res.data.errMsg || res.data.errorMsg;
                console.log(errorMsg)
                wx.showToast(
                  {
                      title:errorMsg,
                      icon:'none',
                  }
                )
              }
            }, 200);
            
            
          },
          fail: function (error) {
            // fail
            console.log(4)
            wx.hideLoading();
            reject(error);
          },
          complete: function () {
            // complete
            console.log(5)
            wx.hideLoading();
          }
        })
      })
    },
    smsGet(url, data, header) {
      wx.showLoading({
        title: '加载中',//数据请求前loading，提高用户体验
      })
      let reqHeader={
        // 'X-Bmob-Application-Id': bmobConfig.applicationId,
        // 'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
        'Content-Type': 'application/json'
      }
      if(header){
        reqHeader.token = header.token;
      }
      return new Promise((resolve, reject) => {
        wx.request({
          url: url,
          data: data,
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: reqHeader, // 设置请求的 header
          success: function (res) {
            // success
            wx.hideLoading();
            if(res.statusCode!=200){
              wx.showToast({
                title: "网络出错，稍后再试",
                icon: "none"
              });
              return false;
            }
            if(res.data.returnCode == 200){
              resolve(res.data);
            }else{
              let errorMsg = res.data.errMsg || res.data.returnMsg;
              wx.showToast(
                {
                    title:errorMsg,
                    icon:'none'
                }
              )
            }
          },
          fail: function (error) {
            // fail
            wx.hideLoading();
            reject(error);//请求失败
          },
          complete: function () {
            wx.hideLoading();
            // complete
          }
        })
      })
    },
    smsPost(url, data, header) {
      wx.showLoading({
        title: '加载中',
      })
      let reqHeader={
        // 'X-Bmob-Application-Id': bmobConfig.applicationId,
        // 'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
        'Content-Type': 'application/json'
      }
      if(header){
        reqHeader.token = header.token;
      }
      return new Promise((resolve, reject) => {
        wx.request({
          url: url,
          data: data,
          method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          header: reqHeader, // 设置请求的 header
          success: function (res) {
            // success
            wx.hideLoading();
            if(res.data.returnCode == 200){
              resolve(res.data);
            }else{
              let errorMsg = res.data.errMsg || res.data.returnMsg;
              wx.showToast(
                {
                    title:errorMsg,
                    icon:'none'
                }
              )
            }
            
          },
          fail: function (error) {
            // fail
            wx.hideLoading();
            reject(error);
          },
          complete: function () {
            // complete
            wx.hideLoading();
          }
        })
      })
    },
  }
  
  export default Http;//暴露出来供其他文件引用