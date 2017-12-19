Page({
  onLoad: function (options) {
    const _this = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
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
                content: '这是程序自带的地图',
                color: '#FF0000',
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
  handleSearch(e) {
    console.log(e)
  }
  // regionchange(e) {
  //   console.log(e.type)
  // },
  // markertap(e) {
  //   console.log(e.markerId)
  // },
  // controltap(e) {
  //   console.log(e.controlId)
  // }
})