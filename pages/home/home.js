// pages/home/home.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movielist: [],
        hotlist: [],
        happylist: [],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this;
        let data = app.globalData.params;
        wx.request({
            url: data.url + data.in_theaters,
            data: {
                start: 2,
                count: 10
            },
            success(res) {
                var movielist = res.data.subjects;
                _this.setData({
                    movielist: movielist,
                })
            }
        });
        wx.request({
            url: data.url + data.coming_soon,
            data: {
                start: 2,
                count: 10
            },
            success(res) {
                let hotlist = res.data.subjects;
                _this.setData({
                    hotlist: hotlist
                })
            }
        });
        wx.request({
            url: data.url + data.top250,
            data: {
                start: 2,
                count: 10
            },
            success(res) {
                let happylist = res.data.subjects;
                _this.setData({
                    happylist: happylist
                })
            }
        });
    },
    jump(e) {
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url:"/pages/details/details?id="+id
        })
    },
    more(e){
       let  title=e.target.dataset.title;
      wx.navigateTo({
          url:"/pages/more/more?title="+title
      })
    },
    semo(){
        wx.navigateTo({
            url:"/pages/search/search"
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }

})