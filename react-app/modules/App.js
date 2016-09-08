import React from 'react'
import Header from './common/Header'

if (typeof  window.config != "object") {
    window.config = {};
}

window.config.orgPackage = {
    "package3800": "6a61f91b-b39b-429e-98d6-8deabe22f1a5",
    "package9600": "394c31ca-2c1f-4a82-b318-d5c0fcfc0839"
};
window.config.studyPackage = {
    "studyId": "7b57c5f5-af24-4c11-8e93-062e43d9ea05",
    "saleId": "0e95e75e-17f9-4808-a3e8-25afae54e81b"
};

window.config.baseUrl = "http://api.yunxuetang.com.cn/lecaiapi/v1/";
window.config.commonUrl = "http://api.yunxuetang.com.cn/componentapi/v1/";
window.config.mallurl = "http://api.yunxuetang.com.cn/mallapi/v1/";
window.config.logUrl = "http://172.17.128.221:8082/logapi/v1/";
window.config.imageBaseUrl = 'http://7xj636.com2.z0.glb.qiniucdn.com/'; //开发（新商城通用）
window.config.mallPayUrl = 'http://pay.yunxuetang.com.cn/pay/cashier'; //开发（统一支付页面）
window.config.baiduImgBaseUrl = 'http://pico.test.yxt.com/';  //用户头像，机构logo

export default React.createClass({
  render() {
    return (
      <div>
        <Header />
        <div className="main-view">
          <div style={{height: '47px'}}></div>
          {this.props.children}
        </div>
      </div>
    )
  }
})