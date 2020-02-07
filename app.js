//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var jwt_token = wx.getStorageSync('jwt_token')

    if (!jwt_token) {
      this.login();
    } else {
      this.globalData.jwt_token = jwt_token;
    }

    // 登录

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    host: '',
    jwt_token: ''
  },
  login() {
    const _this = this;
    wx.login({
      success: res => {
        const {
          code
        } = res;
        console.log(code);
        wx.request({
          url: 'http://localhost:8888/login',
          method: 'post',
          data: {
            "code": code
          },
          success: res => {
            const jwt_token = res.header.Authorization;
            _this.globalData.jwt_token = jwt_token;
            wx.setStorage({
              key: 'jwt_token',
              data: jwt_token,
            })
          }
        })
      }
    })
  }
})