import React from 'react'

export default React.createClass({
    getInitialState:function(){
        return {
            myOrgs:[]
        }
    },
    orgLogin:function(data){
        localStorage.userId = data.userId;
        localStorage.orgId = data.orgId;
        localStorage.token = data.token;
        localStorage.orgCode = data.code;

        const { location } = this.props;
        if (location.state && location.state.nextPathname) {
          this.props.history.replace(location.state.nextPathname)
        } else {
          this.props.history.replace('/')
        }
    },
    login:function(){
        var data = {
            userName: this.refs.userName.value, 
            password: this.refs.password.value
        };

        $.ajax({
            type:"post",
            url:window.config.baseUrl+'global/tokens',
            data:JSON.stringify(data),
            headers: { 
                "Accept": 'application/json',
                "Content-Type": 'application/json' 
            },
            dataType: 'json',
            success:function(data){
                this.setState({"myOrgs":data.datas})
                if(data.datas.length==1){
                    this.orgLogin(data.datas[0])
                }
            }.bind(this)
        })
    },
    goBack:function(){
        history.go(-1)
    },
    render() {
        var _this=this;
        if(this.state.myOrgs.length>1){
            var Orgs = this.state.myOrgs.map(function(item,i){
                return (
                    <li className="comp-list" onClick={_this.orgLogin.bind(_this,item)} key={i}>
                        <a  className="new-list-a layout-flex-align-center">
                            <div className="list-img">
                                <img src={"http://pico.yxt.com/"+(item.logoURL?item.logoURL:"g/img/default_logo.png")} width="90" />
                            </div>
                            <div className="list-info row-flex">
                                <p className="nowrap">{item.orgName}</p>
                                <div className="text-size-12 text-grey">
                                    <span className="">上次登录：{item.lastLoginTime}</span>
                                 </div>
                            </div>
                        </a>
                    </li>
                )
            });
            return (
                <div>
                    <div className="load-title">选择企业</div>
                    <div className="select-text">您目前属于多个企业，请选择您本次登录的企业：</div>
                    <div className="new-list">
                        <ul className="list-ui-common">
                            {Orgs}
                        </ul>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <div className="load-title">
                        <a onClick={this.goBack} className="ml10 mt10" style={{float: "left",color:"#fff"}}><i
                                className="fa fa-angle-left text-size-24"></i></a>
                        用户登录
                    </div>
                    <div className="reg-form clearfix tab-content">
                        <div  className="tab-pane active" name="loginForm">
                            <div className="form-input-area">
                                <div className="has-iconbefore">
                                    <span className="iconfont icon-user2 form-control-icon text-color3a text-size-20"></span>
                                    <input name="userName" ref="userName" type="text" className="login-input form-control" placeholder="请输入邮箱/手机号" required />
                                </div>
                            </div>
                            <div className="form-input-area">
                                <div className="has-iconbefore">
                                    <span className="iconfont icon-mima form-control-icon text-color3a text-size-20"></span>
                                    <input name="password" ref="password" type="password" className="login-input form-control" placeholder="登录密码" required maxLength="20" minLength="6" />
                                </div>
                            </div>
                            <div className="forget-mima">
                                <a>忘记密码？</a>
                            </div>
                            <div className="login-button-area clearfix">
                                <button className="btn btn-bg-blue btn-lg" onClick={this.login}>登录</button>
                            </div>
                            <p className="has-user clearfix">
                                <a>手机验证码登录</a>
                                <span className="pull-right">企业尚未注册？<a>立即注册</a></span>
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    }
})