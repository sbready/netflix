import React, { Component } from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import './MainCarousel.css'

const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MainCarousel extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            movies: [],
            caroList: {}
        }
        
    }

    async componentDidMount(){
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`)
        .then( res => {
            this.setState({
                movies: res.data.results.splice( 0, 3 )
            })
        })
    }

    render() {
        const { movies } = this.state
        // const caroList = movies.map( ( e, i ) => {
        //     this.setState({
        //         caroList: {
        //             key: e.id, 
        //             backdrop_path: e.backdrop_path, 
        //             overview: e.overview, 
        //             release_date: e.release_date, 
        //             title: e.title, 
        //             vote_average: e.vote_average}
        //     })
        // })
                
        console.log(movies[1])
        // console.log(Object.keys(movies))

        let settings = {
            dots: false,
            infinite: true,
            speed: 100,
            // arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return (
            <div>
                <Slider {...settings}>
                    {/* {this.state.slides.map(function(movies) {
                        return (
                            <div key={movies.key}>
                                <h3>{movies.id}</h3>
                                <img src={`${BACKDROP_PATH}${movies.backdrop_path}`} />
                            </div>
                        );
                    })} */}
                    <div>
                        <h1>{}</h1>
                        {/* <img src={movies[0].backdrop_path}/> */}
                    </div>
                </Slider>
            </div>
        )
    }
};

export default MainCarousel;


