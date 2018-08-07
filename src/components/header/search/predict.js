import React from 'react';

class Predict extends React.Component {

    state = {
        movies: []
    }

    render() {

        let predictList = this.state.movies.map( ( e, i ) => {
            if ( e.lowercase().includes( this.props.name.tolowercase())) {
                return (
                    <div className='predict'> 
                        <p>Did you mean: {e}?</p>
                    </div>
                )
            }
        })
        return(
            <div 
                className='predict container'
                style={{ color: 'red' }}
            >
                { predictList }
            </div>
        )
    }
}

export default Predict;