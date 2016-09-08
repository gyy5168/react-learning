import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div className={"header clearfix"}>  
                <div className="headerlogo">
                    <Link to="index">
                        <img src="stylesheets/images/logo3.png"/>
                    </Link>
                </div>
                <div className="headericons clearfix">
                    <Link to="index"><span className="iconfont icon-shouye"></span></Link>
                    <Link to="org" className="pr"><span className="iconfont icon-loudong"></span></Link>
                    <Link to="my" className="pr"><span className="iconfont icon-wo"></span></Link>
                    <Link to=""><span className="iconfont icon-sousuo1"></span></Link>
                </div>
            </div>
        )
    }
})