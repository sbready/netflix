import React, { Children } from 'react';
import axios from 'axios';

class App extends React.Component {
    state = { data: {} };

    componentDidMount = async () => {
        const data = await fetch('movie/db');
    };

    render() {
        return <div>{this.state.data}</div>;
    }
}

const MovieContext = React.createContext();

class MovieProvider extends React.Component {
    state = { movies: {} };

    componentDidMount = async () => {
        try {
            const results = await axios;
            this.setState(results);
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return <MovieContext.Provider value={this.state}>{children}</MovieContext.Provider>;
    }
}

let movies = null;

const goGetMovies = () => {
    let currentMovie = {};
    if (movies) {
        currentMovie = movies;
        if (currentMovie.error) throw error;
        if (currentMovie.results) return results;
        throw currentMovie.worker;
    } else {
        const worker = axios
            .get('some movies')
            .then(
                ({ data: { movies } }) => {
                    currentMovie.results = movies;
                },
                rejection => {
                    currentMovie.error = rejection;
                },
            )
            .catch(err => {
                currentMovie.error = err;
                console.log('something went wrong', err);
            });
        currentMovie.worker = worker;
        throw worker;
    }
};

class ErrorBoundry extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError = err => {
        return { hasError: true };
    };

    componentDidCatch = err => {
        console.log('you have an err', err);
    };

    render() {
        if (this.state.hasError) {
            return <div>You have an error!</div>;
        } else return this.props.children;
    }
}

<ErrorBoundry>
    <Provider />
</ErrorBoundry>;
