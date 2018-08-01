import React, { Component } from 'react'
import axios from 'axios'


const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class SecondFeatured extends Component {

    constructor( props ){
        super( props )

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        .then( res => {
            this.setState({
                movies: res.data.results[1]
            })
        })
    }

    render(){
        const { movies } = this.state
        console.log(movies)
        return(
            <div className="carousel-item" >
                <div className="box-left"></div>
                {/* <div className="movie-image" style={`${BACKDROP_PATH}/5qxePyMYDisLe8rJiBYX8HKEyv2.jpg`}></div> */}
                <div className="title-info">
                    <h2></h2>
                    <h3>96% Match 2014 PG-13</h3>
                    <p className="overview">With Humanity Teetering on the bring of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.</p>

                    <div className="up-down">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>

                    </div>

                    <p className="overview">Starring:
                        <span className="hover"> Mathew McConaughey</span>,
                        <span className="hover"> Anne Hathaway</span>,
                        <span className="hover"> Jessica Chastain</span>
                    </p>

                    <p className="overview">Genre:
                        <span className="hover"> Sci-fi</span>,
                        <span className="hover"> Fantasy</span>,
                        <span className="hover"> Mystery</span>
                    </p>
                </div>
            </div>
        )
    }

}

export default SecondFeatured;