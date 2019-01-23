import React from 'react';
import axios from 'axios';
import { ThumbDown, ThumbUp } from '@material-ui/icons';

const BBACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class ImageSlide extends React.Component {
    state = {
        movieID: null,
        movie: [],
        credits: null,
        genres: null,
        rating: null,
    };

    async componentDidMount() {
        let movieID = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`,
        );
        movieID = movieID.data.results[this.props.index].id;

        let movie = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieID}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US&append_to_response=release_dates`,
        );
        movie = movie.data;

        let credits = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`,
        );
        credits = credits.data;

        let genres = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieID}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`,
        );
        genres = genres.data.genres;

        let rating = movie.release_dates.results[15].release_dates[0].certification

        this.setState({
            movieID,
            movie,
            credits,
            genres,
            rating
        });
    }

    //add in if statement to only update if props.index changed
    // async componentDidUpdate() {
    //     let movieID = await axios.get(
    //         `https://api.themoviedb.org/3/movie/popular?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`,
    //     );
    //     movieID = movieID.data.results[this.props.index].id;

    //     let movie = await axios.get(
    //         `https://api.themoviedb.org/3/movie/${movieID}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US&append_to_response=release_dates`,
    //     );
    //     movie = movie.data;

    //     let credits = await axios.get(
    //         `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`,
    //     );
    //     credits = credits.data;

    //     let genres = await axios.get(
    //         `https://api.themoviedb.org/3/movie/${movieID}?api_key=c9f7859b271c27cb5b424e6c417e384f&language=en-US`,
    //     );
    //     genres = genres.data.genres;

    //     let rating = movie.release_dates.results[15].release_dates[0].certification

    //     this.setState({
    //         movieID,
    //         movie,
    //         credits,
    //         genres
    //     });
    // }

    render() {
        const { movie, credits, genres, rating } = this.state;

        // setting movie release date
        let d = new Date(`${movie.release_date}`);
        let newDate = d.getFullYear();

        // setting movie release runtime
        let runtimeInMinutes = `${movie.runtime}`;
        let minutes = runtimeInMinutes % 60;
        let hours = (runtimeInMinutes - minutes) / 60;

        // slice first 3 credits
        // let displayCredits = credits && credits.cast.slice(0, 2);

        // slice first 3 genres
        let displayGenres = genres && genres.map(genre => genre).slice(0, 2);
        // console.log('displayGenres', displayGenres);

        return (
            <div className="image-slide">
                <div className="movie-image">
                    {/* <img src={`${BBACKDROP_PATH}${movie.backdrop_path}`} /> */}
                </div>
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <h3>
                        {movie.vote_average}/10 {newDate} {hours + 'h' + minutes + 'm'} {rating}
                    </h3>
                    <p>{movie.overview}</p>
                    <ThumbDown />
                    <ThumbUp />
                    {credits && credits.cast[2] && (
                        <p>
                            Starring:
                            <span className="hover"> {credits.cast[0].name}</span>,
                            <span className="hover"> {credits.cast[1].name}</span>,
                            <span className="hover"> {credits.cast[2].name}</span>
                        </p>
                    )}
                    {genres && genres[2] && (
                        <p>
                            Genres:
                            <span className="hover"> {genres[0].name}</span>,
                            <span className="hover"> {genres[1].name}</span>,
                            <span className="hover"> {genres[2].name}</span>
                        </p>
                    )}
                </div>
            </div>
        );
    }
}

export default ImageSlide;
