import React from 'react';

class SearchBar extends React.Component{
    render(){
        return(
            <div className="searchbar">
                <i className="zmdi zmdi-search"></i>
                <input type="text" placeholder="Search..." onChange={this.props.onChange}/>
            </div>
        )
    }
}

export default SearchBar;