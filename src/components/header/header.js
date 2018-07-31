import React, { Component } from 'react'
import axios from 'axios'

import Search from './search/search'
import Profile from './profile/profile'

class Header extends Component {
    constructor( props ){
        super( props )
    
        this.state = {
            movieID: ''
        }
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        .then( res => {
            this.setState({
                movieID: res.data.id
            })
        })

    }

    render(){
        return(
            <div className="header">
                Netflix
                Home 
                Movies
                Series
                <Search/>
                <Profile/>
            </div>
        )
    }
}

export default Header