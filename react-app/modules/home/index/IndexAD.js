import React from 'react'

export default React.createClass({
    
    componentDidUpdate:function(){
        var num = 0;
        var h = $(".yxt-topwrap").outerHeight()-1;
        var l = $(".yxt-topwrap ul").find("li").length;
        var adInterval;
        
        adInterval = setInterval(function () {
            if (num < l - 1) {
                num++;
            } else {
                num = 0;
            }
            $(".yxt-topwrap ul").css({
                "transform": "translateY(" + -h * num + "px)"
            })
        }, 2500)
    },

    render() {
        var ADs = this.props.data.map(function(item){
            return (
                <li key={item.pid} className="yxt-top clearfix">
                    <div className="pull-left yxt-topimg">
                        <img src="stylesheets/images/yxt_top.png" width="100%" />
                    </div>
                    <div className="clearfix yxt-toptext">
                        <span className="yxt-tophot pull-left">
                            {item.adType==1?'热门':(item.adType==2?'最新':(item.adType==3?'推荐':''))}
                        </span>
                        <div className="yxt-content">
                            <a href={item.staticUrl}>
                                {item.imgUrl?<img src={item.imgUrl} width="100%" />:item.title}
                                
                            </a>
                        </div>
                    </div>
                </li>
            )
        });

        return (
            <div className="yxt-topwrap" style={{height: "41px"}}>
                <ul style={{transform: "translateY(-120px)"}}>
                    {ADs}
                </ul>
            </div>
        )
    }
})
