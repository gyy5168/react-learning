
export default React.createClass({

    componentDidUpdate:function(){
        new Swiper('.a_bannerdiv .swiper-container', {
            loop: true,
            calculateHeight: true,
            resizeReInit: true,
            pagination: ".a_bannerdiv .pagination",
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
            paginationClickable: true
        });
        // 轮播图显示
        $(".a_bannerdiv").animate({opacity: 1}, 30);
    },

    render() {

        var slides = this.props.data.map(function(item){
            return (
                <div className="swiper-slide" style={{position:"relative",height:"auto"}}>
                    <a href={item.mobileUrl}><img src={item.coverSmall?item.coverSmall:item.coverLarge} /></a>
                </div>
            )
        });

        return (
            <div className="a_bannerdiv">
                <div id="slider" className="swiper-container">
                    <div className="swiper-wrapper" style={{height:"auto"}}>
                        {slides}
                    </div>
                    <div className="pagination">
                    </div>
                </div>
            </div>
        )
    }
})
