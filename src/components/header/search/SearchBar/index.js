import React from 'react';

const SearchBar = ({ input, onChange, onClick, onFocus }) => {
    return (
        <form className="searchbox">
            <label>
                <input value={input} onChange={onChange} onClick={e => onClick(e, onFocus)} type="text" placeholder="Search Movie Title..." id="q" />
                {/* <Predict text={this.state.input} list={this.state.filtering ? this.state.filteredMovies : this.state.movies } /> */}
                {/* { this.state.filtering ? displayFilteredList : displayList } */}
            </label>
        </form>
    )
}

export default SearchBar;
