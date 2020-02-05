// pages/ongoing/ongoing.js
Page({

  /**
   * Page initial data
   */
  data: {
    delivers: [{
        type: 0,
        estate: "南岸晶都花园",
        mobile: "18616908888",
        status: 1,
        updateTime: 100000,
      },
      {
        type: 1,
        estate: "铂金名筑",
        mobile: "18616333388",
        status: 1,
        updateTime: 100000,
      },
    ]
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