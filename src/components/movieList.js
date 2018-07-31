import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Movie from './movie'

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
            </div>
        )
    }
}

export default MovieList