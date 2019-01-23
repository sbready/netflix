import React from 'react';
import Arrow from './Arrow';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import ImageSlide from './ImageSlide';
import './carousel.css';

class Carousel extends React.Component {
    state = {
        index: 0,
        slides: [0, 1, 2, 3],
    }

    previous = () => {
        this.setState(({ index, slides }) => ({
            index: (index + slides.length - 1) % slides.length
        }))
    }

    next = () => {
        this.setState(({ index, slides }) => ({
            index: (index + 1) % slides.length
        }));
    }

    render() {
        const { index } = this.state;
        return (
            <div className='carousel'>
                <Arrow
                    direction='left'
                    onClick={ this.previous }
                    Glyph={ KeyboardArrowLeft }
                />

                <ImageSlide index={ index } />

                <Arrow 
                    direction='right'
                    onClick={ this.next }
                    Glyph={ KeyboardArrowRight }
                />
            </div>
        )
    }
}

export default Carousel;
