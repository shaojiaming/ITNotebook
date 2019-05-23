//app.js
const Towxml = require('/towxml/main');     //引入towxml库
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  towxml: new Towxml()                     //创建towxml对象，供小程序页面使用
})
