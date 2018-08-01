import React, { Component } from 'react'
import Header from './../header/header'
import StaticCarousel from './../StaticCarousel/StaticCarousel'
import MovieList from './../movieList'
import Footer from './../footer'

class Home extends Component {

    render(){
        return(
            <div>
                <Header/>
                <StaticCarousel/>
                <MovieList/>
                <Footer/>
            </div>
        )
    }
}

export default Home;
