import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import FirstFeatured from './../featuredMovies/FirstFeatured'
import SecondFeatured from './../featuredMovies/SecondFeatured'
import ThirdFeatured from './../featuredMovies/ThirdFeatured'

class StaticCarousel extends Component{
    render(){
        return(
            <Carousel 
                showArrows={true} 
                showThumbs={false} 
                infiniteLoop={true} 
                autoPlay={true} 
                showStatus={false} 
                interval={5000} 
                transitionTime={700}
            >
                <FirstFeatured/>
                <SecondFeatured/>
                <ThirdFeatured/>
            </Carousel>
        )
    }
}

export default StaticCarousel