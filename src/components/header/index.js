import React from 'react'
import axios from 'axios'

import Logo from './Logo'
import Search from './Search'
import NotificationsIcon from './Notifications'
import Profile from './Profile'
import { NavLink } from 'react-router-dom'
import './header.css'

class Header extends React.Component {

    state = {
        movieID: ''
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
                <NavLink exact to='/' className='logo-container'>
                    <Logo />
                </NavLink>
                <div className='primary-nav'>
                    <NavLink exact activeClassName='selected-link' className='header-link' to='/'>Home</NavLink>
                    <NavLink activeClassName='selected-link' className='header-link' to='/movies'>Movies</NavLink>
                    <NavLink activeClassName='selected-link' className='header-link' to='/series'>TV Shows</NavLink>
                </div>
                <div className='secondary-nav'>
                    <Search />
                    <NotificationsIcon />
                    <Profile />
                </div>
            </div>
        )
    }
}

export default Header