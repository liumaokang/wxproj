// pages/details/details.js
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: "",
        year: "",
        imgs: "",
        countries: "",
        genres: [],
        summary: "",
        actor:[],
        rating:{},
        item:{},
        isFolded:true,
        sho:true
    },
    change(){
        this.setData({
            isFolded: !this.data.isFolded,
            sho:!this.data.sho
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        let data = app.globalData.params;
        let id = options.id;
        wx.showLoading({
            title:"正在加载中..."
        })
        wx.request({
            url: data.url + data.subject + "/" + id,
            method: "GET",
            success(res) {
                let detail = res.data;
                console.log(detail);
                that.setData({
                    title: detail.title,
                    year: detail.year,
                    imgs: detail.images.large,
                    countries: detail.countries,
                    genres: detail.genres,
                    summary: detail.summary,
                    actor:detail.casts,
                    rating:detail.rating,
                    item:detail
                });
                wx.setNavigationBarTitle({
                    title:detail.title
                });
            },
        });
        setTimeout(function () {
            wx.hideLoading()
        }, 1000)
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