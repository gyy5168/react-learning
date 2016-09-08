import React from 'react'

export default React.createClass({

    clickHiddenDownLoad: function () {
        
    },

    render() {
        return (
            <div className="play_title header-title">
                <img src="stylesheets/images/sm_logo.png"></img>
                <span>金牌团队APP，立即拥有三方视频会议</span>
                <a href="downloadApp.html">立即下载</a>
                <i className="iconfont icon-guanbi" onClick={this.clickHiddenDownLoad}></i>
            </div>
        )
    }
})
