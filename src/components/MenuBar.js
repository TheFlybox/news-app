import React from 'react';

class MenuBar extends React.Component{
    render(){
        return(
            <div className="menubar">
                {
                    this.props.data.map((el, index)=>{
                        return <a href="#" className="item" key={index}>{el}</a>
                    })
                }
            </div>
        )
    }
}

export default MenuBar;