Page({
  onLoad: function () {
    this.setData({
      date: (new Date()).toLocaleDateString().split('/').join('-'),
      time: (new Date()).toTimeString().split(' ')[0].slice(0, 5),
    })
  },
  data: {
    phoneNumber: '',
    verificationCode: '',
    date: '',
    time: '',

    phoneTypeCodes: ["+86", "+80", "+84", "+87"],
    phoneTypeIndex: 0,
    phoneType: '+86',

    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,
    account: '微信号',

    countries: ["中国", "美国", "英国"],
    countryIndex: 0,
    country: '中国',

    isAgree: false
  },
  bindPhoneTypeChange: function (e) {
    this.setData({
      phoneTypeIndex: e.detail.value,
      phoneType: phoneTypeCodes[e.detail.value]
    })
  },
  phoneNumberChange: function (e) {
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  getVerificationCode: function () {
    console.log('获取验证码')
    wx.request({
      url: 'http://rap.taobao.org/mockjsdata/26789/home/list', //仅为示例，并非真实的接口地址
      data: { },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  verificationCodeChange: function (e) {
    this.setData({
      verificationCode: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindAccountChange: function (e) {
    this.setData({
      accountIndex: e.detail.value,
      account: accounts[e.detail.value]
    })
  },
  bindCountryChange: function (e) {
    this.setData({
      countryIndex: e.detail.value,
      country: countries[e.detail.value]
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  handleLoad: function () {
    const { phoneType, phoneNumber, verificationCode, date, time, account, country, isAgree } = this.data
    console.log(phoneType)
    console.log(phoneNumber)
    console.log(verificationCode)
    console.log(date)
    console.log(time)
    console.log(account)
    console.log(country)
    console.log(isAgree)
  },
})