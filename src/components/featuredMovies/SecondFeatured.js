import React, { Component } from 'react'
import axios from 'axios'


const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class SecondFeatured extends Component {

    constructor( props ){
        super( props )

        this.state = {
            movies: [],
            movieID: '',
            credits: []
        }
    }

    async componentWillMount(){
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        .then( res => {
            this.setState({
                movieID: res.data.results[1].id
            })
        })

        await axios.get(`https://api.themoviedb.org/3/movie/${this.state.movieID}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US&append_to_response=release_dates`)
        .then( res => {
            this.setState({
                movies: res.data
            })
        })

        await axios.get(`https://api.themoviedb.org/3/movie/${this.state.movieID}/credits?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        .then( res => {
            this.setState({
                credits: res.data
            })
        })

    }

    render(){
        const { movies } = this.state
        const { credits } = this.state
        const genre = this.state.movies.genres
        console.log(movies)
        console.log(credits)
        console.log(genre)

        var d = new Date(`${movies.release_date}`);
        var newDate = d.getFullYear();

        return(
            <div className="carousel-item" >
                <div className="box-left"></div>
                <div className="movie-image">
                    <img src={`${BACKDROP_PATH}${movies.backdrop_path}`}/>
                </div>
                <div className="title-info">
                    <h2>{movies.title}</h2>
                    <h3>{movies.vote_average}/10 {newDate} {'rating'}</h3>
                    <p className="overview">{movies.overview}</p>
                    
                    <div className="up-down">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>

                    </div>

                    {/* <p className="overview">Starring:
                        <span className="hover">{credits.cast[0].name}</span>,
                        <span className="hover">{credits.cast[1].name}</span>,
                        <span className="hover">{credits.cast[2].name}</span>
                    </p> */}

                    <p className="overview">Genre: 
                        {/* {
                            genre.map( genre => {
                                return <span className="hover" key={genre.id}>{genre.name}</span>
                            })
                        } */}
                      {/* <span className="hover" >{genre[0].name}</span> */}

                    </p>
                </div>
            </div>
        )
    }

}

export default SecondFeatured;