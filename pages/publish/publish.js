const app = getApp()
// pages/publish/publish.js
Page({

  /**
   * Page initial data
   */
  data: {
    username: '',
    address: '',
    mobile: '',
    detail: '',
    columns: ['领外卖', '取快递', '其他'],
    selectedKey: 0,
    show: false
  },

  onConfirmSelect(event) {
    console.log(event)
    this.setData({
      selectedKey: event.detail.index,
      show: false
    })
  },

  onChangeDetail(event) {
    this.setData({
      detail: event.detail
    })
  },
  onChangeName(event) {
    this.setData({
      name: event.detail
    })
  },
  onChangeAddress(event) {
    this.setData({
      address: event.detail
    })
  },
  onChangeMobile(event) {
    this.setData({
      mobile: event.detail
    })
  },

  onSelect(event) {
    this.setData({
      selectedKey: event.detail.index
    })
  },

  showPopup() {
    this.setData({
      show: true
    });
  },

  onClosePopup() {
    this.setData({
      show: false
    });
  },

  publish() {
    // TODO: send request
    wx.switchTab({
      url: '/pages/pending/pending',
    })
  },

  getPhoneNumber(e) {
    const { iv, encryptedData } = e.detail;
    wx.checkSession({
      success() {
        console.log("发送获取手机号码请求")
        wx.request({
          url: 'http://localhost:8888/users/authorization',
          method: 'put',
          header: {
            Authorization: app.globalData.jwt_token
          },
          data: { iv, encryptedData },
        })
      },
      fail() {
        app.login();
        wx.showToast({
          title: '请重新尝试',
        })
      }
    })
    
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    this.getTabBar().init();
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})