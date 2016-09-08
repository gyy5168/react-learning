import React from 'react'

export default React.createClass({

    isNullOrEmpty: function(t) {
        if (t == null || t == '') {
            return true;
        } else {
            return false;
        }
    },
    
    stringFormat: function() {
        if (arguments.length == 0)
            return null;
        var str = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    },

    getFullImgUrl: function(imageUrl, operationLogoUrl, width, height) {
        var imageESUrl = 'http://stream2.yunxuetang.com/'; //产线和开发一致（网校）
        var logoBaseUrl = 'http://pic.yxt.com/'; //用户头像，机构logo
        var courseImageDefaultUrl = "http://pic.yxt.com/"; //课程默认封面


        if (!this.isNullOrEmpty(imageUrl) && imageUrl.indexOf('http://') == 0) {
            return imageUrl;
        }

        //文件配置键
        var baseUrl = '';
        var distributeSourceType = '';

        var isNewUrl = !this.
        isNullOrEmpty(operationLogoUrl);
        var newUrl = this.
        isNullOrEmpty(operationLogoUrl) ? imageUrl : operationLogoUrl;
        //知识图片全路径
        var fullImageUrl = "";
        if (isNewUrl) {
            if (this.isNullOrEmpty(newUrl)) {
                imageUrl = "g/img/course_default.png";
                baseUrl = courseImageDefaultUrl;
            } else {
                baseUrl = window.config.imageBaseUrl;
            }
        } else {
            //distributeSourceType=1表示来自选课中心
            if (!this.isNullOrEmpty(newUrl)) {
                distributeSourceType = newUrl.indexOf("isshowviewimage=") > -1 ? 1 : 0;
            }

            if (distributeSourceType == 1) {
                var isFromEs = false; //true-网校 false-商城
                var isNewLogoUrl = false;

                var arrImageUrl = newUrl.split(';');
                isFromEs = false;
                if (arrImageUrl != null && arrImageUrl.length >= 2) {
                    if (arrImageUrl[0] == "isshowviewimage=0") {
                        isFromEs = true;
                        newUrl = arrImageUrl[1].replace("imageurl=", "");
                    } else {
                        newUrl = arrImageUrl[2].replace("viewimageurl=", "");
                    }
                }

                if (isFromEs) {
                    baseUrl = imageESUrl;
                } else {
                    baseUrl = window.config.imageBaseUrl;
                }
            } else {
                baseUrl = window.config.imageBaseUrl;
            }

            if (this.isNullOrEmpty(newUrl)) {
                newUrl = "g/img/course_default.png";
                baseUrl = courseImageDefaultUrl;
            }
        }

        var imgeMogr = "";
        if (width > 0 && height > 0) {
            imgeMogr = "?";
            if (newUrl.indexOf("?") > newUrl.indexOf(".")) {
                imgeMogr = "&";
            }
            //imgeMogr = angular.stringFormat("{0}imageMogr2/thumbnail/{1}x{2}", imgeMogr, width, height);
            imgeMogr = this.stringFormat("{0}imageView2/1/w/{1}/h/{2}/q/100", imgeMogr, width, height);
        }

        //知识图片全路径
        if (baseUrl == imageESUrl) {
            newUrl = newUrl.toLowerCase();
        }
        fullImageUrl = baseUrl + newUrl.toLowerCase() + imgeMogr;
        return fullImageUrl;
    },

    render() {
        var fullImageUrl = this.getFullImgUrl(this.props.imageYrl, this.props.operationLogoUrl, this.props.imageWidth, this.props.imageHeight)

        return ( 
            < img className = { this.props.className } src = { fullImageUrl } /> 
        )
    }
})
