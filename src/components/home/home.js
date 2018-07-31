import React, { Component } from 'react'
import Header from './../header/header'
import Carousel from './../carousel/carousel'
import MovieList from './../movieList'
import Footer from './../footer'

class Home extends Component {

    render(){
        return(
            <div>
                <Header/>
                <Carousel/>
                <MovieList/>
                <Footer/>
            </div>
        )
    }
}

export default Home;
