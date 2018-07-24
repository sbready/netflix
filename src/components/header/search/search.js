import React, { Component } from 'react'

class Search extends Component{

    handleChange(e){
        e.target.select()
    }

    render(){
        return(
            <div className="search">
                <form className="searchbox">
                {/* <label> */}
                    <input ref="search suggestion" onClick={this.handleChange} className="searchbox__input typeahead form-control" type="text" placeholder="Search Movie Title..." id="q" />
                {/* </label> */}
              </form>
          </div>
        )
    }
}

export default Search