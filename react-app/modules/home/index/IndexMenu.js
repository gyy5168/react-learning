import React from 'react'

export default React.createClass({
    render() {

        var menus = this.props.data.map(function(item){
            return (
                <li  className="text-center" key={item.pid}>
                    <div>
                        <a href={item.staticUrl}>
                            <img src={item.imgUrl} width="45" height="45" />
                        </a>
                    </div>
                    <div className="mt10">
                        <a className="text-default" href={item.staticUrl}>{item.title}</a>
                    </div>
                </li>
            )
        });

        return (
            <div className="bg-white pv15">
                <ul className="layout-tiled">
                    {menus}
                </ul>
            </div>
        )
    }
})
