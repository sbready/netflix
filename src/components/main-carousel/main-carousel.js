import React, { Component } from 'react'
import axios from 'axios'

import './main-carousel.css'

class MainCarousel extends Component{
    constructor( props ){
        super( props )

        this.state = {
            trending3: [],
            movieID: [],
            original_title: [],
            tagline: [],
            overview: [],
            homepage: [],
            poster: [],
            production: [],
            genre: [],
            release: [],
            vote: [],
            runtime: [],
            revenue: [],
            backdrop: []
        }
    }

    ComponentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/{}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        .then( res => {
            this.setState({
                movieID: res.data.id,
                original_title: res.data.original_title,
                tagline: res.data.tagline,
                overview: res.data.overview,
                homepage: res.data.homepage,
                poster: res.data.poster_path,
                production: res.data.production_companies,
                genre: res.data.genres,
                release: res.data.release_date,
                vote: res.data.vote_average,
                runtime: res.data.runtime,
                revenue: res.data.revenue,
                backdrop: res.data.backdrop_path
            })
        })
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default MainCarousel