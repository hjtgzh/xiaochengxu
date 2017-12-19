Page({
  data: {
    agreeStatus: true
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  toUserAgreement: function () {
    console.log('跳转')
    wx.navigateTo({
      url: '../userAgreement/userAgreement'
    })
  },
  agreeHandle: () => {
    this.setData({
      agreeStatus: !this.data.agreeStatus
    })
  }
})