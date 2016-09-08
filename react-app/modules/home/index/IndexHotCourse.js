import React from 'react'
import GetKngImage from '../../common/GetKngImage'

export default React.createClass({
    render() {

        var Courses = this.props.data.map(function(item,i){
            return (
                <div className="col-6 coursediv" key={i}>
                    <div className="placehold-wrap-default">
                        <a>
                            <GetKngImage className="placehold-body" imageUrl={item.logoUrl} operationLogoUrl={item.operationLogoUrl} imageWidth="173" imageHeight="97" />
                        </a>
                    </div>
                    <div className="coursename">
                        <a className="nowrap-2">{item.productName}</a>
                    </div>
                    <div className="courseprice clearfix">
                        <span className="pull-left text-colorf60">￥{item.userRealPrice}</span>
                        <span className="pull-right text-grey">
                            <i className="iconfont icon-user"></i>{item.viewCount}
                        </span>
                    </div>
                </div>
            )
        });

        return (
            <div className="coursecontentdiv">
                <div className="coursetitle clearfix">
                    <span><i className="line-blue"></i>热门课程</span>
                    <a href="#courses">更多<i className="more-course"></i></a>
                </div>
                <div className="clearfix">
                    {Courses}
                </div>
            </div>
        )
    }
})
