// deliver.js
Component({
  /**
   * Component properties
   */
  properties: {
    type: {
      type: Number,
      value: 0,
    },
    estate: {
      type: String,
      value: ""
    },
    mobile: {
      type: String,
      value: ""
    },
    status: {
      type: Number,
      value: 0,
    },
    updateTime: {
      type: Number,
      value: 0,
    }
  },

  /**
   * Component initial data
   */
  data: {
    types: ['领外卖', '取快递', '其他'],
    statusButtons: ['领取', '完成', '已完成']
  },

  /**
   * Component methods
   */
  methods: {

  }
})