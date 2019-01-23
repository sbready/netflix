import React from 'react';

import SearchIcon from './SearchIcon';
import SearchBar from './SearchBar';
// import MovieList from './../../movieList/movieList'
// import Predict from './predict'

class Search extends React.Component {
    state = {
        input: '',
        movies: [{ name: 'amovie1' }, { name: 'bmovie2' }, { name: 'cmovie3' }],
        filtering: false,
        filteredMovies: [],
        focused: false,
    };

    handleSelect = e => {
        e.target.select();
        const input = this.state.input;
        this.setState({
            input: '',
        });
    };

    handleInput = ({ target: { value } }) => {
        let newMovies = this.filterSearch(value);

        if (value.length) {
            this.setState({
                input: value,
                filtering: true,
                filteredMovies: newMovies,
            });
        } else {
            this.setState({
                input: '',
                filtering: false,
            });
        }
    };

    filterSearch = value => {
        let { movies } = this.state;
        let newMovies = movies.filter(({ name }) => {
            if (name.includes(value)) {
                return true;
            }
        });
        return newMovies;
    };

    onFocus = () => {
        const input = this.state.input.length;
        if (input) {
            this.setState({
                focused: true,
            });
        }
    };

    render() {
        const { input, movies, focused } = this.state;

        const displayList = movies.map((e, i) => {
            return (
                <div key={i} className="movieName">
                    <h1>Name: {e.name}</h1>
                </div>
            );
        });

        const displayFilteredList = movies.map((e, i) => {
            return (
                <div key={i} className="movieName">
                    <h1>Name: {e.name}</h1>
                </div>
            );
        });

        // console.log(displayList)
        // console.log(displayFilteredList)

        return (
            <div className="search">
                <SearchIcon />
                <SearchBar
                    input={input}
                    onChange={this.handleInput}
                    onClick={this.handleSelect}
                    onFocus={this.onFocus}
                />
            </div>
        );
    }
}

export default Search;
