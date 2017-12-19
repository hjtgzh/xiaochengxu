//index.js
//获取应用实例
import { musicList } from './resources/musicList.js'
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('http://music.163.com/song/media/outer/url?id=202369.mp3')
  },
  data: {
    musicItem: null,
    musicList: musicList,
  },
  musicClick: function(e) {
    console.log(e)
    const music = e.currentTarget.dataset.item
    this.setData({
      musicItem: {
        poster: music.poster,
        name: music.name,
        author: music.author,
        // src: music.src
      },
      musicList: this.data.musicList.map(item => {
        item.checked = e.currentTarget.dataset.item.name == item.name
        return item
      })
    })
    this.audioCtx.setSrc(music.src)
    this.audioCtx.play()
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})
