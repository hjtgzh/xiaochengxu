//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello',
    userInfo: {},
    userPhoto: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function(e) {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    // 图片预览
    wx.previewImage({
      urls: [e.currentTarget.dataset.url] // 需要预览的图片http链接列表
    })
  },
  setStorageSync: function (key, value) {
    wx.setStorageSync(key, value)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      // console.log(app.globalData.userInfo)
      this.setStorageSync('userImgUrl', app.globalData.userInfo.avatarUrl)
      this.setData({
        userInfo: app.globalData.userInfo,
        motto: `Hello ${app.globalData.userInfo.nickName}`,
        userPhoto: app.globalData.userInfo.avatarUrl,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        // console.log(res)
        this.setStorageSync('userImgUrl', res.userInfo.avatarUrl)
        this.setData({
          userInfo: res.userInfo,
          motto: `Hello ${res.userInfo.nickName}`,
          userPhoto: res.userInfo.avatarUrl,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  chooseImg: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        // 获取图片信息
        wx.getImageInfo({
          src: tempFilePaths[0],
          success: function (res) {
            console.log(res)
            console.log(res.width)
          }
        })
      },
      fail: () => {
        console.log('选择失败')
      }
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  }
})
