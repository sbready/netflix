import React, { Component } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import axios from 'axios'

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: #fff;
    text-align: left;
    padding: 2rem 10%;
    display: flex;

    > div {
        margin-left: 20px;
    }

    img {
        position: relative;
        top: -5rem;
    }
`;

class MovieDetail extends Component {

    constructor( props ) {
        super( props )

        this.state = {
            movies: {}
        }
    }

    componentDidMount(){

        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieID}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        .then( res => {
            this.setState({
                movies: res.data
            })
        })
    }

    render(){
        const { movies } = this.state
        console.log( movies )

        return(
            <div>
                <MovieWrapper backdrop={`${BACKDROP_PATH}${movies.backdrop_path}`}>
                    <Overdrive id={movies.id}>
                        <MovieInfo>
                            <div>
                                <h1>{movies.title}</h1>
                                <h3>{movies.release_date}</h3>
                                <p>{movies.overview}</p>
                            </div>
                        </MovieInfo>
                    </Overdrive>
                </MovieWrapper>
            </div>
        )
    }
}

export default MovieDetail