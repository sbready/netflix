import React from 'react'
import axios from 'axios'

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class SecondFeatured extends React.Component {

    state = {
        movies: [],
        movieID: '',
        credits: null,
        genres: '',
        rating: ''
    }

    async componentWillMount(){
        let movieID = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        movieID = movieID.data.results[1].id

        let movies = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US&append_to_response=release_dates`)
        movies = movies.data

        let credits = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        credits = credits.data

        let genres = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        genres = genres.data.genres

        let rating = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US&append_to_response=release_dates`)
        rating = rating.data.release_dates.results[16].release_dates[0].certification

        this.setState({
            movieID,
            movies,
            credits,
            genres,
            rating
        })
    }

    render(){
        // setting state variables
        const { movies } = this.state
        const { credits } = this.state
        const { genres } = this.state
        const { rating } = this.state

        // setting movie release date
        var d = new Date(`${movies.release_date}`);
        var newDate = d.getFullYear();

        // setting movie release runtime
        var runtimeInMinutes = (`${movies.runtime}`)
        var minutes = runtimeInMinutes % 60;
        var hours = (runtimeInMinutes - minutes) / 60;

        return(
            <div className="carousel-item" >
                <div className="box-left"></div>
                <div className="movie-image">
                    <img src={`${BACKDROP_PATH}${movies.backdrop_path}`}/>
                </div>
                <div className="title-info">
                    <h2>{movies.title}</h2>
                    <h3>{movies.vote_average}/10 {newDate} {rating} {hours + 'h' + minutes + 'm'}</h3>
                    <p className="overview">{movies.overview}</p>
                    
                    <div className="up-down">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>

                    </div>

                    {credits && <p className="overview">Starring:
                        <span className="hover"> {credits.cast[0].name}</span>,
                        <span className="hover"> {credits.cast[1].name}</span>,
                        <span className="hover"> {credits.cast[2].name}</span>
                    </p>}

                    {genres && <p className="overview">Genres:
                        <span className="hover" > {genres[0].name}</span>,
                        <span className="hover" > {genres[1].name}</span>,
                        <span className="hover" > {genres[2].name}</span>
                    </p>}
                </div>
            </div>
        )
    }

}

export default SecondFeatured;