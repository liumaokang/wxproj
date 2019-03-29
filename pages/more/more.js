// pages/more/more.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movielist: [],
        coming_soon: [],
        top: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this;
        let cls = options.title;
        let url = app.globalData.params.url;
        let coming_soon = app.globalData.params.coming_soon;
        let top250 = app.globalData.params.top250;
        let search = app.globalData.params.search;
        let in_theaters = app.globalData.params.in_theaters;
        let api = "";
        switch (cls) {
            case "影院热映" :
                api = url + in_theaters;
                break;
            case "豆瓣热门" :
                api = url + coming_soon;
                break;
            case "top250" :
                api = url + top250;
        };
        wx.request({
            url: api,
            success(res) {
                let subject = res.data.subjects;
                _this.setData({
                    movielist: subject,
                });
                wx.setNavigationBarTitle({
                    title:cls
                });
            }

        });
        wx.request({
            url: api,
            success(res) {
                let subject = res.data.subjects;
                _this.setData({
                    coming_soon: subject,
                });
                wx.setNavigationBarTitle({
                    title:cls
                });
            }
        });
        wx.request({
            url: api,
            success(res) {
                let subject = res.data.subjects;
                _this.setData({
                    top: subject,
                });
                wx.setNavigationBarTitle({
                    title:cls
                });
            }
        });
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