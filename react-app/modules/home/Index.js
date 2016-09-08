import React from 'react'
import IndexHeader from './index/IndexHeader'
import IndexSlider from './index/IndexSlider'
import IndexMenu from './index/IndexMenu'
import IndexAD from './index/IndexAD'
import IndexCourseAD1 from './index/IndexCourseAD1'
import IndexCourseAD2 from './index/IndexCourseAD2'
import IndexHotCourse from './index/IndexHotCourse'

export default React.createClass({

    getInitialState:function(){
        return {
            sliderData:[],
            adData:[],
            menuData:[],
            courseADData1:[],
            courseADData2:[],
            hotCourseData:[]
        }
    },

    componentDidMount:function(){
        // 轮播
        $.ajax({
            url:window.config.baseUrl+'news?type=4&num=5',
            success:function(data){
                this.setState({"sliderData":data.datas})
            }.bind(this)
        })
        // 页面分类
        $.ajax({
            url:window.config.baseUrl+'appad/search?type=5',
            success:function(data){
                this.setState({"menuData":data.datas})
            }.bind(this)
        })
        // 头条
        $.ajax({
            url:window.config.baseUrl+'appad/search?type=2',
            success:function(data){
                this.setState({"adData":data.datas})
            }.bind(this)
        })
        // 推荐课程4格
        $.ajax({
            url:window.config.baseUrl+'appad/search?type=3',
            success:function(data){
                this.setState({"courseADData1":data.datas})
            }.bind(this)
        })
        // 推荐课程2格
        $.ajax({
            url:window.config.baseUrl+'appad/search?type=4',
            success:function(data){
                this.setState({"courseADData2":data.datas})
            }.bind(this)
        })
        // 热门课程
        $.ajax({
            url:window.config.baseUrl+'hotspot/courses/list?limit=4&offset=0&type=1',
            success:function(data){
                this.setState({"hotCourseData":data.datas})
            }.bind(this)
        })
    },

    render() {

        return (
            <div>
                <IndexSlider data={this.state.sliderData} />
                <IndexMenu data={this.state.menuData} />
                <IndexAD data={this.state.adData} />
                <div className="mt10">
                    <IndexCourseAD1 data={this.state.courseADData1} />
                    <IndexCourseAD2 data={this.state.courseADData2} />
                </div>
                <div className="yxt-courses">
                    <IndexHotCourse data={this.state.hotCourseData} />
                </div>
            </div>
            
        )
    }
})
