import React, { Component } from 'react';
import '../Pages/About.css'
import BBF from '../assets/images/BBF1.jpg';


class About extends Component {
    render() {
        return (
            <div className='AboutContainer'>
                <img className='AboutImg' src={BBF} alt='Rashad' />


                <p className='AboutMe'>
                    <h1>RASHAD AKA BIGG BRUCE</h1>
                    I am NASM certified personal trainer.
                </p>
            </div>
        )
    };
}

export default About;