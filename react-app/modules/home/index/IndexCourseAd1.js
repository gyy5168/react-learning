import React from 'react'

export default React.createClass({
    render() {

        var ADs = this.props.data.map(function(item,i){
            switch (i) {
                case 0:
                {
                    item.className = " text-colorf603 ";
                    break;
                }
                case 1:
                {
                    item.className = " text-blue4 ";
                    break;
                }
                case 2:
                {
                    item.className = " text-colorf604 ";
                    break;
                }
                case 3:
                {
                    item.className = " text-green70 ";
                    break;
                }
            }
            return (
                <li className="pv10 border-r" key={i}>
                    <a className="new-list-a" href={item.staticUrl}>
                        <div className="text-center">
                            <span className={'text-size-14'+item.className}>{item.title}</span><br />
                            <span className="text-size-12 text-default">{item.firstSubtitle}</span>
                            <div className="mh15">
                                <img src={item.imgUrl} width="100%" />
                            </div>
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
