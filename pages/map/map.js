Page({
  data: {
    keyWords: ''
  },
  onLoad: function (options) {
    const userImgUrl = wx.getStorageSync('userImgUrl')
    const _this = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        // 打开微信内部地图
        // wx.openLocation({
        //   latitude: res.latitude,
        //   longitude: res.longitude,
        //   name: '我现在的位置',
        //   address: `东经${res.longitude}, 北纬${res.latitude}`
        // })

        // 设置当前自己位置坐标
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [
            {
              iconPath: './resources/zihan.jpg',
              id: 0,
              latitude: res.latitude,
              longitude: res.longitude,
              width: 50,
              height: 50,
              callout: {
                content: `我现在的位置, 东经${res.longitude}, 北纬${res.latitude}`,
                fontSize: 14,
                borderRadius: 10,
                padding: 5
              }
            }
          ],
          controls: [
            {
              id: 1,
              iconPath: './resources/zihan.jpg',
              position: {
                left: 0,
                top: 300 - 50,
                width: 50,
                height: 50
              },
              clickable: true
            }
          ]
        })
      }
    })
  },
  data: {
    latitude: '40',
    longitude: '116',
    markers: [],
    controls: []
  },
  keyWordsChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      keyWords: e.detail.value
    })
  },
  // 地图搜索
  handleSearch: function () {
    console.log(this.data.keyWords)
  }
})