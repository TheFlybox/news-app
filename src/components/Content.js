import React from 'react';

class Content extends React.Component{
    constructor(){
        super();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState(nextProps)
        }
    }
    render(){
        return(
            <div className="content">
                {
                    this.props.data.map((el, index)=>{
                        return(
                            <div className="card" key={index}>
                                <img src={el.urlToImage} alt="" className="card-img-top" />
                                <div className="card-title">{el.title}</div>
                                <div className="card-description">
                                    {el.description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Content;