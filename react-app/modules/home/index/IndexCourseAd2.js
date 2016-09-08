import React from 'react'

export default React.createClass({
    render() {

        var ADs = this.props.data.map(function(item,i){
            return (
                <li className="border-r pv10" key={i}>
                    <a className="row-flex layout-flex-align-center" href={item.staticUrl}>
                        <div className="col-flex-1">
                            <div className="ph5">
                                <img src={item.imgUrl} width="100%" />
                            </div>
                        </div>
                        <div className="col-flex-2">
                            <h4 className="text-default text-size-16 nowrap">{item.title}</h4>
                            <p className="mb0 text-color6">
                                <span className="text-size-12">{item.firstSubtitle}</span><br/>
                                <span className="text-size-12">{item.secondSubtitle}</span>
                            </p>
                        </div>
                    </a>
                </li>
            )
        });

        return (
            <div className="new-list bg-white border-b">
                <ul className="layout-tiled">
                    {ADs}
                </ul>
            </div>
        )
    }
})
