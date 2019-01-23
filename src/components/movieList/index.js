import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Movie from '../movie'
import './movieList.css'

const MovieGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
`;

class MovieList extends Component {

    constructor( props ){
        super( props )

        this.state = {
            movies: [],
            movieID: ''
        }
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        .then( res => {
            this.setState({
                movies: res.data.results
            })
        })
    }

    render(){
        const { movies } = this.state

        return(
            <div>
                <h3>Trending Movies</h3>
                <MovieGrid>
                    {
                        movies.map( movie => (
                            <Movie key={movie.id} movie={movie}/>
                        ))
                    }
                </MovieGrid>

                <div className="row">
                    <div className="row__inner">
                        <div className="tile">
                            <div className="tile__media">
                                {
                                    movies.map( movie => (
                                        <Movie key={movie.id} movie={movie}/>
                                    ))
                                }
                                <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg" alt=""  />
                            </div>
                            <div class="tile__details">
                                <div class="tile__title">
                                    Top Gear
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}

export default MovieList