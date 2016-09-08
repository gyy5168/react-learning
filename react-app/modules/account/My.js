import React from 'react'

export default React.createClass({

    getInitialState:function(){
        return {
            userData:{level:1,imageUrl:"g/img/default_header.png"},
            userStudyInfo:{},
            courseCount:"",
            favCount:"",
            studyCount:"",
            kngCountt:"",
            uploadCount:""
        }
    },

    componentDidMount:function(){
        // 个人信息
        $.ajax({
            url:window.config.baseUrl+'tokens/orguser',
            headers:{
                token:localStorage.token
            },
            success:function(data){
                this.setState({"userData":data})
            }.bind(this)
        })
        // 个人学习时长
        $.ajax({
            url:window.config.baseUrl+'study',
            headers:{
                token:localStorage.token
            },
            success:function(data){
                this.setState({"userStudyInfo":data})
            }.bind(this)
        })

        // 
        $.ajax({
            url:window.config.baseUrl+'users/' + localStorage.userId + '/myCount',
            headers:{
                token:localStorage.token
            },
            success:function(data){
                this.setState({
                    courseCount:data.myCourseCount,
                    favCount:data.myFavorCount,
                    studyCount:data.myStudyCount,
                    kngCount:data.myPublishKngCount,
                    uploadCount:data.myShareCount
                })
            }.bind(this)
        })
    },

    render() {

        return (
            <div>
                <div className="top_border clearfix">
                    <a>
                        <div className="clearfix head_div">
                            <div className="pull-left">
                                <img src={"http://pico.yxt.com/"+this.state.userData.imageUrl+"@w_60,h_60"} className="avatar avatar-width-60" />
                            </div>
                            <div className="pull-left">
                                <div className="head_name clearfix">
                                    <span className="my_name pull-left">{this.state.userData.fullName}</span>
                                    <div className="my_level pr pull-left">
                                        <img src={"stylesheets/images/my/lv_icon"+Math.ceil(this.state.userData.level/10)+".png"} />
                                        <span className="level_num">{this.state.userData.level}</span>
                                    </div>
                                </div>
                                <div className="ml10 text-size-13 text-color6">账号：<span>{this.state.userData.mobile}</span></div>
                            </div>
                            <div className="pull-right"><i className="fa fa-angle-right"></i></div>
                        </div>
                    </a>
                </div>
                <div className="new-list mb20">
                    <ul className="lh30 list-link mt20 ph10 bg-white">
                        <li className="border-t ph5">
                            <a>
                                <div className="list-info list-info-h">
                                    <div className="col-flex-1 text-size-15">
                                        <img src="stylesheets/images/my/list_icon4.png" width="30" height="30" />
                                        <span className="ml10 text-default">我的课程</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-size-12 text-color3c mr20"><span>{this.state.courseCount}</span>门课程</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="border-t ph5">
                            <a>
                                <div className="list-info list-info-h">
                                    <div className="col-flex-1 text-size-15">
                                        <img src="stylesheets/images/my/list_icon5.png" width="30" height="30"/>
                                        <span className="ml10 text-default">我的收藏</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-size-12 text-color3c mr20"><span>{this.state.favCount}</span>个收藏</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="border-t ph5">
                            <a>
                                <div className="list-info list-info-h">
                                    <div className="col-flex-1 text-size-15">
                                        <img src="stylesheets/images/my/list_icon6.png" width="30" height="30"/>
                                        <span className="ml10 text-default">我的上传</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-size-12 text-color3c mr20"><span>{this.state.uploadCount}</span>个上传</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="border-t ph5">
                            <a>
                                <div className="list-info list-info-h">
                                    <div className="col-flex-1 text-size-15">
                                        <img src="stylesheets/images/my/list_icon7.png" width="30" height="30"/>
                                        <span className="ml10 text-default">我的积分</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-size-12 text-color3c mr20"><span>{this.state.userData.points}</span>积分</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="border-t ph5">
                            <a>
                                <div className="list-info list-info-h">
                                    <div className="col-flex-1 text-size-15">
                                        <img src="stylesheets/images/my/list_icon3.png" width="30" height="30"/>
                                        <span className="ml10 text-default">学习档案</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-size-12 text-color3c mr20">已学<span>{this.state.userStudyInfo.studyMinutes}</span>分钟</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="lh30 list-link mt20 ph10 bg-white">
                        <li className="border-t ph5">
                            <a>
                                <div className="list-info list-info-h">
                                    <div className="col-flex-1 text-size-15">
                                        <img src="stylesheets/images/my/list_icon10.png" width="30" height="30"/>
                                        <span className="ml10 text-default">离线缓存</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="lh30 list-link mt20 ph10 bg-white">
                        <li className="border-t ph5">
                            <a>
                                <div className="list-info list-info-h">
                                    <div className="col-flex-1 text-size-15">
                                        <img src="stylesheets/images/my/list_icon8.png" width="30" height="30"/>
                                        <span className="ml10 text-default">我的账户</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="lh30 list-link mt20 ph10 bg-white">
                        <li className="border-t ph5">
                            <a>
                                <div className="list-info list-info-h">
                                    <div className="col-flex-1 text-size-15">
                                        <img src="stylesheets/images/my/list_icon9.png" width="30" height="30"/>
                                        <span className="ml10 text-default">设置与反馈</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
})
