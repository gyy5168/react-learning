import React from 'react'

export default React.createClass({

    getInitialState:function(){
        return {
            orgName:"",
            salesList:[],
            workList:[]
        }
    },

    componentDidMount:function(){
        // 企业信息
        $.ajax({
            url:window.config.baseUrl+'orgs/' + localStorage.orgId,
            headers:{
                token:localStorage.token
            },
            success:function(data){
                this.setState({"orgName":data.orgName})
            }.bind(this)
        })
        // 金牌销售
        $.ajax({
            url:window.config.baseUrl+"orgs/" + localStorage.orgId + "/appindexs?type=1",
            headers:{
                token:localStorage.token
            },
            success:function(data){
                this.setState({"salesList":data.datas})
            }.bind(this)
        })
        // 企业工作台
        $.ajax({
            url:window.config.baseUrl+"orgs/" + localStorage.orgId + "/appindexs?type=2",
            headers:{
                token:localStorage.token
            },
            success:function(data){
                this.setState({"workList":data.datas})
            }.bind(this)
        })

    },

    render() {
        var Sales = this.state.salesList.map(function(item,i){
            return (
                <li key={i}>
                    <a className="sale-new-module" href={item.targetUrl}>
                        <div>
                            <img src={item.imgUrl} />
                        </div>
                        <div className="mt10 lh24 text-size-13">{item.title}</div>
                    </a>
                </li>
            )
        });
        var Works = this.state.workList.map(function(item,i){
            return (
                <li key={i}>
                    <a className="sale-new-module" href={item.targetUrl}>
                        <div>
                            <img src={item.imgUrl} />
                        </div>
                        <div className="mt10 lh24 text-size-13">{item.title}</div>
                    </a>
                </li>
            )
        });
        return (
            <div>
                <div className="sale-route-wrap">
                    <div className="pr">
                        <img width="100%" src="http://pic.yxt.com/index/m/sale_logoBg.jpg" />
                        <div className="sale-route-top a_bannerdiv">
                            <div className="text-center">
                                <img src="stylesheets/images/salepack/u323.png" width="80" className="pt10" />
                                <p className="text-size-16 text-default mt20">{this.state.orgName}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sale-route-logo sale-new-logo">
                    <div className="bg-white mb15">
                        <div className="lh40 text-size-16 pl15 border-b">
                            金牌销售
                        </div>
                        <ul className="clearfix">
                            
                            {Sales}
                        </ul>
                    </div>
                    <div className="bg-white mb15">
                        <div className="lh40 text-size-16 pl15 border-b">
                            企业工作台
                        </div>
                        <ul className="clearfix">
                            
                            {Works}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})
