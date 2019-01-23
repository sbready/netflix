import React from 'react';
import './carousel.css';

const Arrow = ({ direction, onClick, Glyph }) => (
    <div className={ `slide-arrow ${direction}` } onClick={ onClick }>
        <Glyph />
    </div>
)

export default Arrow;
