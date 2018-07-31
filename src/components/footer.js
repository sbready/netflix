import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component{
    render(){
        return(
            <div>
                <h4>Copyright 2018</h4>
                <Link to={'https://github.com/sbready/netflix'}>Github</Link>
            </div>
        )
    }
}

export default Footer;