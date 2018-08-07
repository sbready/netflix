import React from 'react'
// import MovieList from './../../movieList/movieList'
// import Predict from './predict'

class Search extends React.Component{

    constructor( props ) {
        super( props )

        this.state = {
            input: '',
            movies: [{name: 'amovie1'}, {name: 'bmovie2'}, {name: 'cmovie3'}],
            filtering: false,
            filteredMovies: []
        }
        // this.handleSelect = this.handleSelect.bind(this)
        // this.handleInput = this.handleInput.bind(this)
        // this.filterSearch = this.filterSearch.bind(this)
    }

    handleSelect = e => {
        e.target.select();
        let input = this.state.input;
        console.log('search submitted value', input);
        this.setState({
            input: ''
        })
    }

    handleInput = e => {
        let text = e.target.value;
        let newMovies = this.filterSearch( text )

        if ( text.length ) {
            this.setState({
                input: text,
                filtering: true,
                filteredMovies: newMovies
            })
        } else {
            this.setState({
                input: text,
                filtering: false,

            })
        }
    }

    filterSearch = search => {
        let { movies } = this.state

        let newMovies = movies.filter( e => {
            if ( e.name.includes( search ) ) {
                return true;
            }
        })
        return newMovies
    }

    render(){

        const { movies } = this.state
        
        const displayList = movies.map( ( e, i ) => {
            return (
                <div key={i} className='movieName'>
                    <h1>Name: {e.name}</h1>
                </div>
            )
        })

        const displayFilteredList = movies.map( ( e, i ) => {
            return (
                <div key={i} className='movieName'>
                    <h1>Name: {e.name}</h1>
                </div>
            )
        })

        console.log(displayList)
        console.log(displayFilteredList)

        return(
            <div className="search">
                <form className="searchbox">
                <label>
                    <input value={this.state.input} onChange={this.handleInput} type="text" placeholder="Search Movie Title..." id="q" />
                    {/* <Predict text={this.state.input} list={this.state.filtering ? this.state.filteredMovies : this.state.movies } /> */}
                    { this.state.filtering ? displayFilteredList : displayList }
                </label>
              </form>
          </div>
        )
    }
}

export default Search