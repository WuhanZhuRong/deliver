Component({
  data: {
    active: 0,
    list: [
      {
        icon: 'home-o',
        text: '发布需求',
        url: '/pages/publish/publish'
      },
      {
        icon: 'orders-o',
        text: '待认领',
        url: '/pages/pending/pending'
      },
      {
        icon: 'shopping-cart-o',
        text: '进行中',
        url: '/pages/ongoing/ongoing'
      },
      {
        icon: 'completed',
        text: '已完成',
        url: '/pages/complete/complete'
      }
    ]
  },

  methods: {
    onChange(event) {
      console.log(event.detail)
      this.setData({ active: event.detail });
      wx.switchTab({
        url: this.data.list[event.detail].url
      });
    },

    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
});
