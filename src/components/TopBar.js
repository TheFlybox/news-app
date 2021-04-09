import React from 'react';

class TopBar extends React.Component{
    render(){
        return(
            <div className="top-bar">
                <div className="left">
                    <a href="#" className="brand">{this.props.title}</a>
                </div>
                <div className="right">
                    <div className="nav">
                        {
                            this.props.data.map((el, index)=>{
                                return <a href="#" className="item" key={index}>{el}</a>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar;