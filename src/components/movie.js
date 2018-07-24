import React from 'react'
import Overdrive from 'react-overdrive'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'


  const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

  export const Poster = styled.img`
    box-shadow: 0 0 25px #000;
  `;

  const Movie = ({ movie }) => (
    <Link to={`/${movie.id}`}>
      <Overdrive id={movie.id}>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </Overdrive>
    </Link>
  )

  Movie.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Movie